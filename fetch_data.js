"use strict";

export async function fetchJson() {
    const jsonData = await fetch("./public/data.json");
    const gamingData = await jsonData.json();

    return gamingData;
}