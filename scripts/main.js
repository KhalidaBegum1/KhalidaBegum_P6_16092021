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
      <div class="vignette">
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
              `<span> <li><a href="index.html?tag=${tag}">#${tag}</a></li></span> `
          )
          .join("")}
       
        </ul>
      </div>
    </article>
  `);
};

//display photographer profile

const displayProfile = (photographer) => {
  document.getElementById("main").appendChild(createProfile(photographer));
};

//upload json file

let tag = new URLSearchParams(window.location.search).get("tag");
loadData()
  .then((data) => {
    if (tag) {
      return data.photographers.filter((photographer) =>
        photographer.tags.includes(tag)
      );
    }
    return data.photographers;
  })
  .then((photographers) => {
    photographers.forEach(displayProfile);
  });
/* TODO :  Ajouter dynamiquement les tags
  Pour cela : 
  0) Créer une nouvelle fonction createTags
  function createTags(photographer){

  }
  1) Faire un boucle sur tous les photographes
  2) Récupérer dedans tous les tags existants
  3) Les stocker dans un tableau
  4) Filtrer le tableau pour éviter d'avoir des tags en double
  5) Faire un boucle sur ce tableau là puis return le HTML nécessaire grâce à convertStringToHTML()
  6) Créer une seconde fonction displayTags
  7) Puis faire l'appel de la fonction createTags dedans pour y insérer les données dans .nav-menu
*/
