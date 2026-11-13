import "./styles.css";
import { buildIntro, displayMenu, displayAbout } from "./page-loader.js";

buildIntro();

const btn = document.querySelectorAll(".tab-btn");

btn.forEach((btn) => {
    btn.addEventListener("click", () => activateTab(btn));
});

function activateTab(btn) {
    let isSelected = btn.getAttribute("data-target");
    console.log(isSelected);
    switch (isSelected) {
        case "Home":
            buildIntro();
            break;

        case "Menu": 
            displayMenu();
            break

        case "About":
            displayAbout();
            break

        default:
            break;
    }
}

