// Post list text

import { pages } from "./constants/api.js";

const blog = `${pages}/363`;

const blogContainer = document.querySelector ("#blog-list");

blogContainer.innerHTML = "";

async function getText() {
  try {
    const response = await fetch(blog);

    const page = await response.json();

    blogContainer.innerHTML += `<h1>${page.title.rendered}</h1>
                ${page.content.rendered}`;
  } catch (error) {
    console.log("An error has occurred");
    blogContainer.innerHTML = "An error has occurred";
  }
}

getText();
