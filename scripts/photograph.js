import { loadData, convertStringToHTML } from "./common.js";
import { getMedias } from "./media.js";

//DOM elements
const modalBackground = document.querySelector(".background");
const modalBtn = document.querySelectorAll(".btn-contact");
const lightboxBackground = document.querySelector(".lightbox");
const next = document.querySelector("#nav-right");
const prev = document.querySelector("#nav-left");
let containerMedia = document.querySelector(".lightbox-image");
const closeBox = lightboxBackground.querySelector(".lightbox-close");
closeBox.addEventListener("click", closeLightbox);
const urlPhotographerId = +new URLSearchParams(location.search).get(
  "photographerId"
);
// Launch sort menu
const dropBtn = document.querySelectorAll(".close-menu");

const contentClose = document.querySelector(".dropbtn");
contentClose.addEventListener("click", closeMenu);

const closeBtn = modalBackground.querySelector(".close");
closeBtn.addEventListener("click", closeModal);

//photographer bio
const data = await loadData().then((data) => {
  const photographer = data.photographers.find((photographer) => {
    return photographer.id === urlPhotographerId;
  });
  const media = data.media.filter((media) => {
    return media.photographerId === urlPhotographerId;
  });

  return {
    photographer: photographer,
    medias: media,
  };
});
console.log(data.medias);
// 1 : Récupérer la tri voulu
// 2: ajout un event listener sur les boutons
// 3 : récupérer le texte du bouton
// 4 : faire une condition selon le tri
// 5: faire le sort du tableau data.medias
console.log("tri");
// 6a : Vider le contenu du #portfolio
// 6b : Relancer cette ligne :  document.querySelector("#portfolio").appendChild(getMedias(data.medias));

const getPhotographerBio = (photographer) => {
  return convertStringToHTML(`
  <div class="profile-text">
    <h1>${photographer.name}</h1>
  
    <span>${photographer.city}, ${photographer.country}</span>
    <p>${photographer.tagline}</p>
  </div>
  <span class="profile-pic">
    <img
      src="Sample Photos/Photographers ID Photos/${photographer.portrait}"
      alt="Portrait de ${photographer.name}"
    />
  </span>
  `);
};

const getTags = (photographer) => {
  return convertStringToHTML(
    photographer.tags
      .map((tag) => {
        return `<span> <li><a href="index.html?tag=${tag}">#${tag}</a></li></span> `;
      })
      .join("")
  );
};

// Launch Modal

document.title = data.photographer.name;
document
  .querySelector("#photographer_bio")
  .appendChild(getPhotographerBio(data.photographer));

document
  .querySelector("#photographer_tags")
  .appendChild(getTags(data.photographer));

document.querySelector("#portfolio").appendChild(getMedias(data.medias));
const lightboxPics = document.querySelectorAll(".portfolio-pics");
let count = 0;
//console.log(lightboxPics);
lightboxPics.forEach((img) =>
  img.addEventListener("click", (e) => {
    count = e.target.getAttribute("data-id");

    let containerMedia = document.querySelector(".lightbox-image");

    containerMedia.innerHTML = lightboxPics[count].innerHTML;

    lightboxBackground.style.display = "block";
  })
);

next.addEventListener("click", () => {
  count = parseInt(count) + 1;

  console.log(count);
  if (count > lightboxPics.length - 1) {
    count = 0;
  }
  containerMedia.innerHTML = lightboxPics[count].innerHTML;
});

prev.addEventListener("click", () => {
  count = parseInt(count) - 1;
  console.log(count);
  if (count < 0) {
    count = lightboxPics.length - 1;
  }

  containerMedia.innerHTML = lightboxPics[count].innerHTML;
});

// Functions
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

function closeLightbox() {
  lightboxBackground.style.display = "none";
}

function launchLightbox(e) {
  console.log(e.target);
  lightboxBackground.style.display = "block";
}
//e.target.getAttribute("data-id");

function launchModal() {
  modalBackground.style.display = "block";
}

function closeModal() {
  modalBackground.style.display = "none";
}

function sortMenu() {
  dropMenu.style.display = "block";
}

function closeMenu() {
  dropMenu.style.display = "none";
}
dropBtn.forEach((btn) => btn.addEventListener("click", sortMenu));

//sort

//const urlLikes = +new URLSearchParams(location.search).get("likes");
//const urlTitles = new URLSearchParams(location.search).get("title");
const byPopularity = document.querySelector(".sort-popularity");
//const numberOfLikes = [urlLikes];
//const titles = "urlTitles";
//numberOfLikes.sort();
//console.log(numberOfLikes);

let numbers = [5, 8, 3, 12, 9];
numbers.sort((a, b) => a - b);
console.log(numbers);

byPopularity.addEventListener("click", () => {
  console.log("test");
});
