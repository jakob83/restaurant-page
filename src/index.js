import "./main.css";
import "./reset.css";
import { buildMenu } from "./menu";

const content = document.getElementById("content");
let menuBtn = document.querySelectorAll(".menu button");

menuBtn[0].classList.add("active");
menuBtn.forEach(element => {
    element.addEventListener("click", (e) => {
        removeActiveM();
        e.target.classList.add("active");
    })
});

function removeActiveM() {
    menuBtn.forEach(element => {
        element.classList.remove("active");
    });
}

buildMenu();
