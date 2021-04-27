"use strict";

import './sass/style.scss';
import {formController} from "./display_form.js";
import {isFormValid} from "./form_validation.js";
import {post} from "./post_data.js";

window.addEventListener("DOMContentLoaded", init);

function init() {
  console.log("init");

  formController();
  isFormValid();
  //post();
}