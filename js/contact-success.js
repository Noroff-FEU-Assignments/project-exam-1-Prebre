// Contact success text

import { pages } from "./constants/api.js";

const success = `${pages}/369`;

const successContainer = document.querySelector("#success");

successContainer.innerHTML = "";

async function getText() {
  try {
    const response = await fetch(success);

    const page = await response.json();

    successContainer.innerHTML += `<h1>${page.title.rendered}</h1>
                ${page.content.rendered}
                
                <div class="button-wrapper">
                    <input type="button" id="contact-button" class="cta" onclick="location.href='contact.html';" value="Back to form" />
                    <input type="button" id="homepage-button" class="cta" onclick="location.href='index.html';" value="Back to homepage" />`;
  } catch (error) {
    console.log("An error has occurred");
    successContainer.innerHTML = "An error has occurred";
  }
}

getText();
