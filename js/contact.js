// Contact us text

import { pages } from "./constants/api.js";

const contact = `${pages}/367`;

const contactContainer = document.querySelector("#contact");

contactContainer.innerHTML = "";

async function getText() {
  try {
    const response = await fetch(contact);

    const page = await response.json();

    contactContainer.innerHTML += `<h1>${page.title.rendered}</h1>
                ${page.content.rendered}`;
  } catch (error) {
    console.log("An error has occurred");
    contactContainer.innerHTML = "An error has occurred";
  }
}

getText();
