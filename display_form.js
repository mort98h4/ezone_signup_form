"use strict"; 

export function formController(gameData) {
    console.log(gameData);

    displayForm("#gameTypes", gameData.types, "game_type");
}

function displayForm(destination, jsonData, nameAtr) {
    console.log(destination, jsonData);
    const dest = document.querySelector(destination);

    jsonData.forEach(entry => {
        let newEntry = entry.toLowerCase().replace(" ", "-");
        
        const li = document.createElement("li");
        dest.append(li);

        const label = document.createElement("label");
        label.setAttribute("for", newEntry);
        li.append(label); 

        const checkBox = document.createElement("input");
        checkBox.setAttribute("type", "checkbox");
        checkBox.setAttribute("id", newEntry);
        checkBox.setAttribute("name", nameAtr);
        checkBox.value = newEntry;

        label.append(checkBox, entry);
    });
}