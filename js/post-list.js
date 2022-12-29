// Post list

import { posts } from "./constants/api.js";

const listContainer = document.querySelector("#list-container");

listContainer.innerHTML = "";

async function getList() {
        try {
                const response = await fetch(posts);

                const post = await response.json();

                for(let i = 0; i < post.length; i++) {

                        listContainer.innerHTML += `<div class="card">
                                <a href="post.html?id=${post[i].id}"><h2>${post[i].title.rendered}</h2></a>
                                <div class="list-img-container"><img src="${post[i].jetpack_featured_media_url}" class="list-img" alt="#"></div>
                                <p>${post[i].excerpt.rendered}</p>
                                </div>`

                                                        
                }
        }
        catch(error) {
                console.log("An error has occurred");
                listContainer.innerHTML = "An error has occurred"
        }
}

getList();