"use strict"
const myName = " Maxmudbek"; 
const myJob ="Dasturchi"; 
console.log(`Mening ismim ${myName} , Kasbim ${myJob}`);



let numberOfSeries = prompt("Enter number of series");
console.log(numberOfSeries);

let rang = "qizil";

let seriesDB = { 
    count: 7,
    series: "gameofhhrones", 
    actors: "games", 
    geners: "Fantasy",
    color: rang,
    privat: false,
}
console.log(seriesDB)

let kino = prompt("Kino nomini kiriting");
let baxo = prompt ("Nechi baxo qo'yas ");
let kino2 = prompt("Kino nomini kiriting");
let baxo2 = prompt ("Nechi baxo qo'yas ");

let series = { 
    Kinoningnomi: kino,
    sizningbaxoinggiz: baxo,
    Kinoningnomis: kino2,
    sizningbaxoinggizs: baxo2
}
console.log(series);

    let svetaforRang = prompt("Svetafor rangini kiriting");
    let rang = {
        rang: svetaforRang
    }
if (rang.rang === "yashil") { 
    alert("Yurish mumkin") 
} else { 
    alert("Yurish mumkin emas")
}
rang.rang = "yashil" ? alert("Yurish mumkin") : alert("Yurish mumkin emas")

let yosh = prompt("yoshinggizni kiriting")
switch (yosh) {
    case "18": alert("siz 18 yoshdasiz"); break;
    case "20": alert("siz 20 yoshdasiz"); break;
    case "22": alert("siz 22 yoshdasiz"); break;
    default: alert("sizda yoshda emas");
}