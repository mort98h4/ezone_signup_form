"use strict";

export function displayEndMessage(status) {
  console.log("displayEndMessage", status);

  switch (status) {
    case 201:
      document.querySelector("form").setAttribute("hidden", true);
      document.querySelector(".message").textContent =
        "Thank you for signing up! Log in and read our suggestions of articles for you";
      document.querySelector(".view_form").setAttribute("hidden", true);
      break;
    default:
      console.log("Something went terribly wrong...");
  }
}
