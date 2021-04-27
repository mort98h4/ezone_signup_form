"use strict";

import { post } from "./post_data";

export function isFormValid() {
    const form = document.querySelector("form");
    form.setAttribute("novalidate", true);

    document.querySelectorAll("fieldset").forEach(el => {
        const attributes = el.getAttributeNames();
        if (attributes.indexOf("hidden") === -1) {
            addEventListenersToBtns(el);
        }
    })
}

function addEventListenersToBtns(el) {
    const prevBtn = document.querySelector("#prevBtn");
    const nextBtn = document.querySelector("#nextBtn");
    const submitBtn = document.querySelector("input[type=submit]");
    const form = document.querySelector("form");

    nextBtn.addEventListener("click", clickNext);
    prevBtn.addEventListener("click", clickPrev);

    if (el.nextElementSibling.tagName === "DIV") {
        nextBtn.setAttribute("hidden", true);
        submitBtn.removeAttribute("hidden");
    } else {
        nextBtn.removeAttribute("hidden");
        submitBtn.setAttribute("hidden", true);
    }

    function clickNext() {
        nextBtn.removeEventListener("click", clickNext);
        prevBtn.removeEventListener("click", clickPrev);
        form.removeEventListener("submit", submitClick);

        el.setAttribute("hidden", true);
        el.nextElementSibling.removeAttribute("hidden");
        isFormValid();
    }

    if (el.previousElementSibling.tagName === "DIV") {
        prevBtn.setAttribute("disabled", true);
    } else {
        prevBtn.removeAttribute("disabled");
    }

    function clickPrev() {
        prevBtn.removeEventListener("click", clickPrev);
        nextBtn.removeEventListener("click", clickNext);
        form.removeEventListener("submit", submitClick);

        el.setAttribute("hidden", true);
        el.previousElementSibling.removeAttribute("hidden");
        isFormValid();
    }

    form.addEventListener("submit", submitClick);
    function submitClick(event) {
        prevBtn.removeEventListener("click", clickPrev);
        nextBtn.removeEventListener("click", clickNext);
        form.removeEventListener("submit", submitClick);
        event.preventDefault();
        console.log("Prevent default action");

        const firstName = form.elements.first_name.checkValidity();
        const lastName = form.elements.last_name.checkValidity();
        const email = form.elements.email.checkValidity();
        const gamerTag = form.elements.gamer_tag.checkValidity();
        const password = form.elements.password.checkValidity();
        const hoursADay = form.elements.hours_a_day.checkValidity();
        if (!firstName || !lastName || !email || !gamerTag || !password) {
            el.setAttribute("hidden", true);
            document.querySelector("#personalInfo").removeAttribute("hidden");
            isFormValid();
            // nextBtn.removeAttribute("hidden");
            // submitBtn.setAttribute("hidden", true);
        } else if (!hoursADay) {
            el.setAttribute("hidden", true);
            document.querySelector("#gamerInfo").removeAttribute("hidden");
            isFormValid();
        } else {
            const platforms = [];
            document.querySelectorAll("[name=platform]:checked").forEach(el=>{
                platforms.push(el.value);
            })
            const gameTypes = [];
            document.querySelectorAll("[name=game_type]:checked").forEach(el=>{
                gameTypes.push(el.value);
            })
            const games = [];
            document.querySelectorAll("[name=games]:checked").forEach(el=>{
                games.push(el.value);
            })
            const problemAreas = [];
            document.querySelectorAll("[name=problem_area]:checked").forEach(el=>{
                problemAreas.push(el.value);
            })
            const improvementAreas = [];
            document.querySelectorAll("[name=improvement_area]:checked").forEach(el=>{
                improvementAreas.push(el.value);
            })
            post({
                full_name: `${form.elements.first_name.value} ${form.elements.last_name.value}`,
                email: form.elements.email.value,
                age: form.elements.age.value,
                gamer_tag: form.elements.gamer_tag.value,
                password: form.elements.password.value,
                platform: platforms,
                game_type: gameTypes,
                games: games,
                hours_a_day: form.elements.hours_a_day.value,
                problem_area: problemAreas,
                improvement_area: improvementAreas
            });
        }
    }
}