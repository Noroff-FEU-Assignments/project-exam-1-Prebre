// Latest

import { posts } from "./constants/api.js";

const latestContainer = document.querySelector("#latest-container");

latestContainer.innerHTML = "";

async function getLatest() {
        try {
                const response = await fetch(posts);

                const post = await response.json();

                for(let i = 0; i < post.length; i++) {

                        if (i === 5) {
                            break;
                        }

                        latestContainer.innerHTML += `<li class="carousel">
                        <h3><a href="post.html?id=${post[i].id}" alt="#">${post[i].title.rendered}</a></h3>
                        <div class="img-container">
                                <img src="${post[i].jetpack_featured_media_url}" class="carousel-img" alt="#">
                        </div>
                        ${post[i].excerpt.rendered}
                        <div class="button-wrapper">
                                <input type="button" class="cta" onclick="location.href='post.html?id=${post[i].id}';" value="Read more" />
                        </div>
                        </li>`

                        const carousel = document.querySelector(".carousel");

                        const prevPost = document.getElementById("prev-post");

                        const nextPost = document.getElementById("next-post");


                        nextPost.addEventListener("click", () => {
                                const carouselWidth = carousel.clientWidth;
                                latestContainer.scrollLeft += carouselWidth;
                        });

                        prevPost.addEventListener("click", () => {
                                const carouselWidth = carousel.clientWidth;
                                latestContainer.scrollLeft -= carouselWidth;
                        });

                                                        
                }
        }
        catch(error) {
                console.log("An error has occurred");
                latestContainer.innerHTML = "An error has occurred"
        }
}

getLatest();


// Arrow buttons

