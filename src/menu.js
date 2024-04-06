import backgroundSrc from "./background.jpg";
const backgroundImg = document.createElement("img");
backgroundImg.src = backgroundSrc;
backgroundImg.className = "menu-background";

const aboutContainer = document.createElement("div");
aboutContainer.classList.add("about-tsagga");
aboutContainer.innerText = `
Indulge in the charm of Tsagga, a culinary haven nestled in the heart of Pfalzen.
Our restaurant offers a sophisticated yet unpretentious atmosphere, where guests can savor the finest locally sourced ingredients expertly prepared to perfection.
At Tsagga, we prioritize quality and simplicity, ensuring each dish shines with flavor and finesse.
Paired with a thoughtfully curated selection of wines and spirits, our menu promises a delightful dining experience that's both classy and comforting.
Escape the ordinary and join us at Tsagga for an unforgettable culinary journey in Pfalzen.
`;

function buildMenu() {
    content.appendChild(backgroundImg);
    content.appendChild(aboutContainer);
}

export { buildMenu };