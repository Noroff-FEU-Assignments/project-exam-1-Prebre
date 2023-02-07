// Category links

import { categories } from "./constants/api.js";

const linkContainer = document.querySelector("#link-container");

linkContainer.innerHTML = "";

async function getLinks() {
  try {
    const response = await fetch(categories);

    const category = await response.json();

    for (let i = 0; i < category.length; i++) {
      linkContainer.innerHTML += `<a class="cta" href="/category.html?id=${category[i].id}">${category[i].name}</a>`;
    }
  } catch (error) {
    console.log("An error has occurred");
    linkContainer.innerHTML = "An error has occurred";
  }
}

getLinks();
