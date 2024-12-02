import InitHomePage from "./homepage.js";
import InitMenuPage from "./menu.js";
import InitAboutPage from "./about-page.js";

const contentDiv = document.querySelector("#content");

InitHomePage();

const mainNavigation = document.querySelector("#main_navigation");
mainNavigation.addEventListener('click', (event) => {
    let target = event.target;
    showSelectedTab(target.id);
});


function showSelectedTab(selectedTab) {
    contentDiv.textContent = "";

    switch(selectedTab) {
        case "button_home":
            InitHomePage();
            break;
        case "button_menu":
            InitMenuPage();
            break;
        case "button_about":
            InitAboutPage();
            break;
    }
}

console.log("Project setup successfully!");