// About us text

import { pages } from "./constants/api.js";

const about = `${pages}/365`;

const aboutContainer = document.querySelector("#about");

aboutContainer.innerHTML = "";

async function getText() {
  try {
    const response = await fetch(about);

    const page = await response.json();

    aboutContainer.innerHTML += `<h1>${page.title.rendered}</h1>
                ${page.content.rendered}`;
  } catch (error) {
    console.log("An error has occurred");
    aboutContainer.innerHTML = "An error has occurred";
  }
}

getText();
