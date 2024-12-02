export default function InitMenuPage() {
    const contentDiv = document.querySelector("#content");
    const menuPageImageContainer = document.createElement("div");
    const menuPageHeadlineContainer = document.createElement("div");
    const menuPageDescriptionContainer = document.createElement("div");

    menuPageImageContainer.textContent = "Insert Menu Page Image Here";
    menuPageHeadlineContainer.textContent = "This is the Menu Page headline paragraph";
    menuPageDescriptionContainer.textContent = "This is the Menu Page description paragraph section";

    contentDiv.appendChild(menuPageImageContainer);
    contentDiv.appendChild(menuPageHeadlineContainer);
    contentDiv.appendChild(menuPageDescriptionContainer);
}