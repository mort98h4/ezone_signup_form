"use strict";

const url = "https://ezone-cced.restdb.io/rest/ezone";
const apiKey = "6083dfc328bf9b609975a609";

export async function post() {
    console.log("post");
    const data = {
        full_name: "Morten Gross",
        email: "MortenGross_93@hotmail.com",
        age: 27,
        gamer_tag: "AchedStarfish",
        password: "thisiSaPazzw0rd",
        platform: [
            "PlayStation"
        ],
        game_type: [
            "Sports"
        ],
        games: [
            "FIFA"
        ],
        hours_a_day: 4,
        problem_area: [
            "Sleep"
        ],
        improvement_area: [
            "Reaction time"
        ]
    }

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
    console.log(jsonData);
}