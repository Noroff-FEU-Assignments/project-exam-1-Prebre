// Post list

import { posts } from "./constants/api.js";

const postsPerPage = `${posts}?per_page=100&page=1`;

const listContainer = document.querySelector("#list-container");

const loadBtn = document.querySelector("#loadPosts");

listContainer.innerHTML = "";

async function getList() {
  try {
    const response = await fetch(postsPerPage);

    const post = await response.json();

    for (let i = 0; i < 10; i++) {
      listContainer.innerHTML += `<div class="card">
                            <a href="post.html?id=${post[i].id}"><h2>${post[i].title.rendered}</h2></a>
                            <div class="list-img-container">
                                <img src="${post[i].jetpack_featured_media_url}" class="list-img" alt="Image to visualise the theme of this post, ${post[i].title.rendered}">
                            </div>
                                ${post[i].excerpt.rendered}
                            </div>`;
    }

    loadBtn.addEventListener("click", function loadTen() {
      for (let j = 10; j < 20; j++) {
        listContainer.innerHTML += `<div class="card">
                            <a href="post.html?id=${post[j].id}"><h2>${post[j].title.rendered}</h2></a>
                            <div class="list-img-container">
                                <img src="${post[j].jetpack_featured_media_url}" class="list-img" alt="Image to visualise the theme of this post, ${post[j].title.rendered}">
                            </div>
                                ${post[j].excerpt.rendered}
                            </div>`;
      }

      if ((post.length = 0)) {
        loadBtn.disabled = true;
      }

      loadTen();
    });
  } catch (error) {
    console.log("An error has occurred");
    listContainer.innerHTML = "An error has occurred";
  }
}

getList();
