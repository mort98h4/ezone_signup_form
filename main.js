"use strict";

import './sass/style.scss';
import {fetchJson} from "./fetch_data.js";
import {formController} from "./display_form.js";
import {post} from "./post_data.js";

window.addEventListener("DOMContentLoaded", init);

async function init() {
  console.log("init");

  const gamingData = await fetchJson();
  formController(gamingData);
  //post();
}