//js todo liste

/* Page d'accueil
function to filter navigation bar tags*/

/* Page de photograph
-media with like button - addeventlistener on click 
-function to increment number of likes 
-function to create Total number of likes additioning number
of likes from all media for each photographer 
-filter to sort media by popularity or title
-onClick on media open in lightbox(modal) - click lightbox X to close
-eventlistener for navigation button and for navigation arrow
-button contact photographer
-contact form(modal)displays on top of everything else - names/email/message
-send email to photographer

*/
import { convertStringToHTML, loadData } from "./common.js";

//create profile into new div and contain each profile in fragments (container)
const createProfile = (photographer) => {
  return convertStringToHTML(`
     <article>
      <div class="vignette" aria-label="Photographer profile">
      <div class="vignette-link">
        <a href="photograph.html?photographerId=${photographer.id}">
          <img
            src="Sample Photos/Photographers ID Photos/${photographer.portrait}"
            alt=" Photo de ${photographer.name}"
          />
          <h2>${photographer.name}</h2>
        </a>
        </div>
        <div class="vignette-text">
          <span>${photographer.city}, ${photographer.country}</span>
          <p>${photographer.tagline}</p>
          <span class="price">${photographer.price}€/jour</span>
        </div>

        <ul class="tags">${photographer.tags
          .map(
            (tag) =>
              `<span> <li><button class="tag-filter" data-tag="${tag}">#${tag}</button></li></span> `
          )
          .join("")}
       
        </ul>
      </div>
    </article>
  `);
};

//display photographer profile

const displayProfile = (data) => {
  document.getElementById("main").innerHTML = "";
  for (let photographer of data) {
    document.getElementById("main").appendChild(createProfile(photographer));
  }
  document.querySelectorAll(".tag-filter").forEach((button) => {
    button.addEventListener("click", (e) => {
      getPhotographer(e.currentTarget.dataset.tag).then((data) => {
        displayProfile(data);
      });
    });
  });
};

//upload json file

async function getPhotographer(tag = null) {
  let data = await loadData();
  if (tag) {
    return data.photographers.filter((photographer) =>
      photographer.tags.includes(tag)
    );
  }
  return data.photographers;
}
getPhotographer().then((data) => {
  displayProfile(data);
});
