"use strict";

import './sass/style.scss';
import {post} from "./fetch.js";

window.addEventListener("DOMContentLoaded", init);

function init() {
  console.log("init");
  post();
}