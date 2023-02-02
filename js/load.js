// Load more posts

import { posts } from "./constants/api.js";

const postsPerPage = `${posts}?per_page=100&page=1`;

const listContainer = document.querySelector("#list-container");

listContainer.innerHTML = "";

const loadPosts = document.querySelector("#loadPosts");

loadPosts.addEventListener("click", loadTen);

function loadTen() {
  for (let i = 10; i < 20; i++) {
    listContainer.innerHTML += `<div class="card">
            <a href="post.html?id=${post[i].id}"><h2>${post[i].title.rendered}</h2></a>
            <div class="list-img-container">
                <img src="${post[i].jetpack_featured_media_url}" class="list-img" alt="#">
            </div>
            <p>${post[i].excerpt.rendered}</p>
        </div>`;
  }
}
