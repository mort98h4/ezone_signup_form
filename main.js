"use strict";

import './sass/style.scss';
import {formController} from "./display_form.js";
import {post} from "./post_data.js";

window.addEventListener("DOMContentLoaded", init);

function init() {
  console.log("init");

  formController();
  //post();
}