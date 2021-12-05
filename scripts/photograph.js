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
//console.log(data.medias);

// 2: ajout un event listener sur les boutons

const byPopularity = document.querySelector(".sort-popularity");
const byTitle = document.querySelector(".sort-title");
const byDate = document.querySelector(".sort-date");
/*
byPopularity.addEventListener("click", () => {
  document.querySelector("#portfolio").innerHTML = "";
  data.medias.sort((a, b) => (a.likes > b.likes ? -1 : 1));
  document.querySelector("#portfolio").appendChild(getMedias(data.medias));
});

byTitle.addEventListener("click", () => {
  document.querySelector("#portfolio").innerHTML = "";
  data.medias.sort((a, b) => (a.title > b.title ? 1 : -1));
  document.querySelector("#portfolio").appendChild(getMedias(data.medias));
});
byDate.addEventListener("click", () => {
  document.querySelector("#portfolio").innerHTML = "";
  data.medias.sort((a, b) => (a.date > b.date ? 1 : -1));
  document.querySelector("#portfolio").appendChild(getMedias(data.medias));
});

function addEvent() {
  byPopularity.addEventListener("click", sort);
  byPopularity.addEventListener("keydown", sort);
  byTitle.addEventListener("click", sort);
  byTitle.addEventListener("keydown", sort);
  byDate.addEventListener("click", sort);
  byDate.addEventListener("keydown", sort);
}*/

function sort(filter) {
  document.querySelector("#portfolio").innerHTML = ""; // Vider le contenu du #portfolio

  data.medias.sort(() => "a." + filter > "b." + filter); //  Récupérer la tri et le sort du tableau data.medias

  document.querySelector("#portfolio").appendChild(getMedias(data.medias)); //Relancer ("#portfolio")
  console.log(filter);
}

byPopularity.addEventListener("click", () => {
  sort((a, b) => (a.likes > b.likes ? -1 : 1));
});
byTitle.addEventListener("click", () => {
  sort((a, b) => (a.title > b.title ? 1 : -1));
});
byDate.addEventListener("click", () => {
  sort((a, b) => (a.date > b.date ? 1 : -1));
});

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

//const numberOfLikes = document.querySelectorAll(".portfolio-likes");
const plusCounter = document.querySelector(".btn-like");
let counterValue = 0;

plusCounter.addEventListener("click", function () {
  let counterAdd = (counterValue += 1);
  // numberOfLikes.innerHTML = counterValue;
  console.log(counterAdd);
});

//numberOfLikes.innerHTML = counterValue;
/*function sort(filter) {
  console.log("a." + filter);
  console.log("b." + filter);
}*/
//sort("likes");
//const byPopularity = document.querySelector(".sort-popularity");
/*function sort(filter) {
  byPopularity.addEventListener("click", () => {
    document.querySelector("#portfolio").innerHTML = ""; // Vider le contenu du #portfolio
    "a." + filter > "b." + filter; //  Récupérer la tri et le sort du tableau data.medias

    document.querySelector("#portfolio").appendChild(getMedias(data.medias)); //Relancer ("#portfolio")
    console.log("a." + filter);
    console.log("b." + filter);
  });
}

sort((a, b) => (a.likes > b.likes ? -1 : 1));
sort((a, b) => (a.title > b.title ? 1 : -1));
sort((a, b) => (a.date > b.date ? 1 : -1));
function sort(filter) {
  byPopularity.addEventListener("click", () => {
    document.querySelector("#portfolio").innerHTML = "";
    "a." + filter > "b." + filter;

    document.querySelector("#portfolio").appendChild(getMedias(data.medias));
    console.log("a.", "b." + filter);
  });
}
sort((a, b) => (a.likes > b.likes ? -1 : 1));
sort((a, b) => (a.title > b.title ? 1 : -1));
sort((a, b) => (a.date > b.date ? 1 : -1));
*/
