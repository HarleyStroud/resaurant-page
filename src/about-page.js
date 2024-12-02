export default function InitAboutPage() {
    const contentDiv = document.querySelector("#content");
    const aboutPageImageContainer = document.createElement("div");
    const aboutPageHeadlineContainer = document.createElement("div");
    const aboutPageDescriptionContainer = document.createElement("div");

    aboutPageImageContainer.textContent = "Insert About page Image Here";
    aboutPageHeadlineContainer.textContent = "This is the About headline paragraph";
    aboutPageDescriptionContainer.textContent = "This is the About description paragraph section";

    contentDiv.appendChild(aboutPageImageContainer);
    contentDiv.appendChild(aboutPageHeadlineContainer);
    contentDiv.appendChild(aboutPageDescriptionContainer);
}