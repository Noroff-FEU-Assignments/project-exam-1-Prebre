// Profiles

const authors = "https://ikpb-mar21pt-cms-ma1.com/wp-json/wp/v2/users"

const authorContainer = document.querySelector("#author-container");

authorContainer.innerHTML = "";

async function getAuthors() {
        try {
                const response = await fetch(authors);

                const author = await response.json();

                for(let i = 0; i < author.length; i++) {

                        authorContainer.innerHTML += `<li class="carousel">
                        <div class="img-container"><img src="${author[i].avatar_urls[48]}" class="profile-img" alt="#"></div>
                        <h3>${author[i].name}</h3>
                        <p class="excerpt">${author[i].description}</p>
                        </li>`

                        const carousel = document.querySelector(".carousel");

                        const prevAuthor = document.getElementById("prev-author");

                        const nextAuthor = document.getElementById("next-author");


                        nextAuthor.addEventListener("click", () => {
                                const carouselWidth = carousel.clientWidth;
                                authorContainer.scrollLeft += carouselWidth;
                        });

                        prevAuthor.addEventListener("click", () => {
                                const carouselWidth = carousel.clientWidth;
                                authorContainer.scrollLeft -= carouselWidth;
                        });
                }
        }
        catch(error) {
                console.log("An error has occurred");
                authorContainer.innerHTML = "An error has occurred"
        }
}

getAuthors();