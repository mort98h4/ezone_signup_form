"use strict";

const url = "https://ezone-cced.restdb.io/rest/ezone";
const apiKey = "6083dfc328bf9b609975a609";

export async function post(data) {
    console.log("post");

    const postData = JSON.stringify(data);
    let jsonData = await fetch(url, {
        method: "post",
        headers: {
            "Content-Type": "application/json; charset=utf-8",
            "x-apikey": apiKey,
            "cache-control": "no-cache"
        },
        body: postData
    })
    console.log(jsonData.status);
}