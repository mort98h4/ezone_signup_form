"use strict"; 

import json from "./data.json";

export function formController() {
    displayForm("#gameTypes", json.types, "game_type");
    displayForm("#games", json.games, "games");
    displayForm("#problemAreas", json.areas, "problem_area");
    displayForm("#improvementAreas", json.areas, "improvement_area");
}

function displayForm(destination, jsonData, nameAtr) {
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