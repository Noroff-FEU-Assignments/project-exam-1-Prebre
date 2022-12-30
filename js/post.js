// Post post

import { posts } from "./constants/api.js";

import { authors } from "./constants/api.js";

import { categories } from "./constants/api.js";

const queryString = document.location.search;

const parameters = new URLSearchParams(queryString);

const id = parameters.get("id");

console.log(id);

const postURL = `${posts}/${id}`

const postContainer = document.querySelector(".content-container");

let title = document.querySelector("title");

postContainer.innerHTML = "";

async function getPost() {

    try {

        const postResponse = await fetch(postURL);

        const post = await postResponse.json();

        const authorURL = `${authors}/${post.author}`;

        const authorResponse = await fetch(authorURL);

        const author = await authorResponse.json();

        const categoryURL = `${categories}/${post.categories[0]}`;

        const categoryResponse = await fetch(categoryURL);

        const category = await categoryResponse.json();

            console.log(post);

            console.log(author);

            postContainer.innerHTML += `<h1>${post.title.rendered}</h1>
            <p class="author">Written by &nbsp; ${author.name}</p><p class="date">Posted ${post.date}</p>
            <p class="categories">Posted in ${category.name}</p>
            <div class="post-txt">
                <div class="post-img"><img id="modal-img" src="${post.jetpack_featured_media_url}" alt="">
                <div id="modal-container" class="modal">
                    <span class="close">&times;</span>
                    <img class="modal-content" id="img-preview">
                </div>
            </div>
            ${post.content.rendered}</div>`
        
            title.innerHTML += `${post.title.rendered} | WotW`

            var modal = document.getElementById("modal-container");

            var modalImg = document.getElementById("modal-img");
            var imgPreview = document.getElementById("img-preview");
            modalImg.onclick = function(){
                modal.style.display = "block";
                imgPreview.src = this.src;
            }

            var span = document.getElementsByClassName("close")[0];

            span.onclick = function() {
            modal.style.display = "none";
            } 
    }
    catch(error) {
                    console.log("An error has occurred");
                    postContainer.innerHTML = "An error has occurred"
    }
}

getPost();

// Image modal

