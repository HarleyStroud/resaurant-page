export default function InitHomepage() {
    const contentDiv = document.querySelector("#content");
    const homePageImageContainer = document.createElement("div");
    const homePageHeadlineContainer = document.createElement("div");
    const homePageDescriptionContainer = document.createElement("div");

    homePageImageContainer.textContent = "Insert Homepage Image Here";
    homePageHeadlineContainer.textContent = "This is the Homepage headline paragraph";
    homePageDescriptionContainer.textContent = "This is the Homepage description paragraph section";

    contentDiv.appendChild(homePageImageContainer);
    contentDiv.appendChild(homePageHeadlineContainer);
    contentDiv.appendChild(homePageDescriptionContainer);
}