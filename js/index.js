// Index text

import { pages } from "./constants/api.js";

const index = `${pages}/360`;

const indexContainer = document.querySelector ("#welcome");

indexContainer.innerHTML = "";

async function getText() {
  try {
    const response = await fetch(index);

    const page = await response.json();

    indexContainer.innerHTML += `<h1>${page.title.rendered}</h1>
                ${page.content.rendered}`;
  } catch (error) {
    console.log("An error has occurred");
    indexContainer.innerHTML = "An error has occurred";
  }
}

getText();
