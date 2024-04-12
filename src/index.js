import "./main.css";
import "./reset.css";
import { buildMenu } from "./menu.js"
import { buildHome } from "./home.js";
import { buildAbout } from "./about.js"
import "./menu.css";
import "./about.css";
const content = document.getElementById("content");
let menuBtns = document.querySelectorAll(".menu button");
const menuBtn = document.getElementById("menu");
const homeBtn = document.getElementById("home");
const aboutBtn = document.getElementById("aboutUs");
menuBtns[0].classList.add("active");
menuBtns.forEach(element => {
    element.addEventListener("click", (e) => {
        removeActiveM();
        e.target.classList.add("active");
    })
});

function removeActiveM() {
    menuBtns.forEach(element => {
        element.classList.remove("active");
    });
}

buildHome();

function removeNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}

menuBtn.addEventListener("click", () => {
    removeNodes(content);
    buildMenu();
});

homeBtn.addEventListener("click", () => {
    removeNodes(content);
    buildHome();
});

aboutBtn.addEventListener("click", () => {
    removeNodes(content);
    buildAbout();
})