// Latest

import { api } from "./constants/api.js";

const latestContainer = document.querySelector("#latest-container");

latestContainer.innerHTML = "";

async function getLatest() {
        try {
                const response = await fetch(api);

                const post = await response.json();

                for(let i = 0; i < post.length; i++) {

                        if (i === 4) {
                            break;
                        }

                        listContainer.innerHTML += `<li class="carousel">
                        <h3><a href="#" alt="#">${post[i].title.rendered}</a></h3><br>
                        <img src="${post[i].jetpack_featured_media_url}" alt="#"><br>
                        <p class="author">${post[i].author}</p> &nbsp; <p class="date">${post[i].date}</p><br>
                        <p class="excerpt">${post[i].excerpt.rendered}</p><br>
                        <input type="button" class="cta" onclick="location.href='#';" value="Read more" />
                        </li>`

                                                        
                }
        }
        catch(error) {
                console.log("An error has occurred");
                latestContainer.innerHTML = "An error has occurred"
        }
}

getLatest();