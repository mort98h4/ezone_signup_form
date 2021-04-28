"use strict"; 

import json from "./data.json";

export function formController() {
    document.querySelector("form").classList.add("hide");
    document.querySelector(".view_form").addEventListener("click", displayForm);

    //toggle form btn type
    document.querySelector(".game_type").addEventListener("mouseover", mouseOverType);
    document.querySelector(".game_game").addEventListener("mouseover", mouseOverGames);
    document.querySelector(".game_imp").addEventListener("mouseover", mouseOverImp);
    document.querySelector(".game_prop").addEventListener("mouseover", mouseOverProp);

    displayFieldsets("#gameTypes", json.types, "game_type");
    displayFieldsets("#games", json.games, "games");
    displayFieldsets("#problemAreas", json.areas, "problem_area");
    displayFieldsets("#improvementAreas", json.areas, "improvement_area");
}

function displayForm() {
    document.querySelector(".view_form").removeEventListener("click", displayForm);
    document.querySelector("form").classList.remove("hide");
    document.querySelector("form").classList.add("opacity");
}

function displayFieldsets(destination, jsonData, nameAtr) {
    const dest = document.querySelector(destination);

    jsonData.forEach(entry => {
        const newEntry = entry.toLowerCase().replaceAll(" ", "-").replaceAll("/", "-");
        
        const li = document.createElement("li");
        dest.append(li);

        const label = document.createElement("label");
        li.append(label); 

        const checkBox = document.createElement("input");
        checkBox.setAttribute("type", "checkbox");
        checkBox.setAttribute("name", nameAtr);

        label.append(checkBox, entry);

        switch (nameAtr) {
            case "problem_area":
                label.setAttribute("for", `${newEntry}1`);
                checkBox.setAttribute("id", `${newEntry}1`);
                checkBox.value = `${newEntry}1`;
                break;
            case "improvement_area":
                label.setAttribute("for", `${newEntry}2`);
                checkBox.setAttribute("id", `${newEntry}2`);
                checkBox.value = `${newEntry}2`;
                break;
            default: 
                label.setAttribute("for", newEntry);
                checkBox.setAttribute("id", newEntry);
                checkBox.value = newEntry;
        }   
    });
}

function mouseOverProp() {
    console.log("mouse in");
    let dropCont = document.querySelector(".prop_content");
    dropCont.classList.remove("hide");

    document
      .querySelector(".game_prop")
      .addEventListener("mouseout", () => {
        dropCont.classList.add("hide");
      });
  }
  function mouseOverImp() {
    console.log("mouse in");
    let dropCont = document.querySelector(".imp_content");
    dropCont.classList.remove("hide");

    document.querySelector(".game_imp").addEventListener("mouseout", () => {
      dropCont.classList.add("hide");
    });
  }

  function mouseOverType() {
    console.log("mouse in");
    let dropCont = document.querySelector(".type_content");
    dropCont.classList.remove("hide");

    document
      .querySelector(".game_type")
      .addEventListener("mouseout", () => {
        dropCont.classList.add("hide");
      });
  }

  function mouseOverGames() {
    console.log("mouse in");
    let dropCont = document.querySelector(".game_content");
    dropCont.classList.remove("hide");

    document
      .querySelector(".game_game")
      .addEventListener("mouseout", () => {
        dropCont.classList.add("hide");
      });
  }