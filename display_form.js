"use strict"; 

export function formController(gameData) {
    displayForm("#gameTypes", gameData.types, "game_type");
    displayForm("#games", gameData.games, "games");
    displayForm("#problemAreas", gameData.areas, "problem_area");
    displayForm("#improvementAreas", gameData.areas, "improvement_area");
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