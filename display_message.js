"use strict";

export function displayEndMessage(status) {
    console.log("displayEndMessage", status);
    
    switch (status) {
        case 201:
            document.querySelector("form").setAttribute("hidden", true);
            break;
        default: 
            console.log("Something went terribly wrong...")
    }  
}