// Post post

import { api } from "./constants/api.js";

const queryString = document.location.search;

const parameters = new URLSearchParams(queryString);

const id = parameters.get("id");

console.log(id);

const postURL = `${api}/${id}`

const postContainer = document.querySelector(".content-container");

let title = document.querySelector("title");

postContainer.innerHTML = "";

async function getPost() {

    try {

        const postResponse = await fetch(postURL);

        const post = await postResponse.json();

            console.log(post);

            postContainer.innerHTML += `<h1>${post.title.rendered}</h1>
            <p class="author">Written by ${post.author}</p><p class="date">Posted ${post.date}</p>
            <div class="post-txt">
                <div class="post-img"><img src="${post.jetpack_featured_media_url}" alt=""></div>
            ${post.content.rendered}</div>
            <p class="prev-post">Previous post: <a href="post.html?id=#">#</a></p>
            <p class="next-post">Next post: <a href="post.html?id=#">#</a></p>`
        
            title.innerHTML += `${post.title.rendered} | WotW`
    }
    catch(error) {
                    console.log("An error has occurred");
                    postContainer.innerHTML = "An error has occurred"
    }
}

getPost();