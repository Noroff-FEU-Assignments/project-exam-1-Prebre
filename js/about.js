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
                        <img src="${author[i].avatar_urls[48]}" class="profile-img" alt="#"><br>
                        <h3>${author[i].name}</h3>
                        <p class="excerpt">${author[i].description}</p>
                        </li>`

                                                        
                }
        }
        catch(error) {
                console.log("An error has occurred");
                authorContainer.innerHTML = "An error has occurred"
        }
}

getAuthors();