import backgroundSrc from "./background.jpg";
const backgroundImg = document.createElement("img");
backgroundImg.src = backgroundSrc;
backgroundImg.className = "menu-background";

const aboutContainer = document.createElement("div");
aboutContainer.classList.add("about-tsagga");

aboutContainer.innerText = `

"Welcome to our restaurant, where every meal is a celebration of flavor, every dish a work of art, and every moment a cherished memory in the making. From farm-fresh ingredients to expertly crafted recipes, we invite you to savor the taste of perfection in every bite. Join us and embark on a culinary adventure that delights the senses and nourishes the soul. Come hungry, leave inspired."

`;

function buildHome() {
    document.querySelectorAll(".menu-btn").forEach(btn => {
        btn.classList.remove("menu-style");
    })
    content.appendChild(backgroundImg);
    content.appendChild(aboutContainer);
}

export { buildHome };