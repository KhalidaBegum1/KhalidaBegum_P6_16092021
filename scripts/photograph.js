import { loadData, convertStringToHTML } from "./common.js";
import { getMedias } from "./media.js";

//recover DOM elements
const modalBackground = document.querySelector(".background");
const modalBtn = document.querySelectorAll(".btn-contact");
let lightboxBackground = document.querySelector(".lightbox");
let next = document.querySelector("#nav-right");
let prev = document.querySelector("#nav-left");
let containerMedia = document.querySelector(".lightbox-image");
const closeBox = lightboxBackground.querySelector(".lightbox-close");
closeBox.addEventListener("click", closeLightbox);
const urlPhotographerId = +new URLSearchParams(location.search).get(
  "photographerId"
);
// Launch and close sort menu
const dropBtn = document.querySelectorAll(".close-menu");

const contentClose = document.querySelector(".dropbtn");
contentClose.addEventListener("click", closeMenu);
//recover close button for contact form
const closeBtn = modalBackground.querySelector(".close");
closeBtn.addEventListener("click", closeModal);

//recover photographer bio and medias
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

//add eventlisterners to sort and filter

const byPopularity = document.querySelector(".sort-popularity");
const byTitle = document.querySelector(".sort-title");
const byDate = document.querySelector(".sort-date");

let count = 0;

function sorted(filter, button) {
  button.addEventListener("click", () => {
    document.querySelector("#portfolio").innerHTML = ""; // Vider le contenu du #portfolio

    if (filter === "likes") {
      data.medias.sort((a, b) => (a.likes > b.likes ? -1 : 1)); //sort most to least
    }

    if (filter === "title") {
      data.medias.sort((a, b) => (a.title > b.title ? 1 : -1)); //sort alphatbetically
    }
    if (filter === "date") {
      data.medias.sort((a, b) => (a.date > b.date ? 1 : -1)); //sort date most recent
    }
    //  Récupérer la tri et le sort du tableau data.medias

    document.querySelector("#portfolio").appendChild(getMedias(data.medias)); //Relancer ("#portfolio")

    let sortedPics = document.querySelectorAll(".portfolio-pics a"); //recover tableau d'images
    //launch lightbox once images sorted
    sortedPics.forEach((img) =>
      img.addEventListener("click", (e) => {
        count = e.target.getAttribute("data-id");

        let containerMedia = document.querySelector(".lightbox-image");

        containerMedia.innerHTML = sortedPics[count].innerHTML;

        lightboxBackground.style.display = "block";
      })
    );

    //launch lightbox once images sorted using keydown
    sortedPics.forEach((img) =>
      img.addEventListener("keydown", (e) => {
        if (e.key === "Enter") {
          count = e.target.firstChild.getAttribute("data-id");

          containerMedia.innerHTML = sortedPics[count].innerHTML;

          lightboxBackground.style.display = "block";
          attributeFocus(e);
        }
      })
    );

    let counterPlus = document.querySelectorAll(".btn-like");
    //add likes and display total on sorted images
    counterPlus.forEach((btn) => btn.addEventListener("click", sortCounter));

    function sortCounter(e) {
      let numberOfLikes = e.currentTarget //target text number of likes
        .closest(".likes")
        .querySelector(".portfolio-likes");
      numberOfLikes.innerHTML = parseInt(numberOfLikes.innerHTML) + 1; //modify by adding 1
      document.getElementById("total-likes").innerHTML = ++totalLikes; //modify total likes by adding 1
    }
  });
}
//callback to sort filters
sorted("likes", byPopularity);
sorted("title", byTitle);
sorted("date", byDate);

//afficher bio dans div
const getPhotographerBio = (photographer) => {
  return convertStringToHTML(`
  <div class="profile-text" aria-label="photographer bio">
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

//afficher tags dans div
const getTags = (photographer) => {
  return convertStringToHTML(
    photographer.tags
      .map((tag) => {
        return `<span> <li><a href="index.html?tag=${tag}">#${tag}</a></li></span> `;
      })
      .join("")
  );
};

// recover photographer bio tags and medias

document.title = data.photographer.name;
document
  .querySelector("#photographer_bio")
  .appendChild(getPhotographerBio(data.photographer));

document
  .querySelector("#photographer_tags")
  .appendChild(getTags(data.photographer));

document.querySelector("#portfolio").appendChild(getMedias(data.medias));
//recover lightbox images
let lightboxPics = document.querySelectorAll(".portfolio-pics a"); //recover tableau d'images

lightboxPics.forEach((img) =>
  img.addEventListener("click", (e) => {
    count = e.target.getAttribute("data-id"); //open selected image in container

    let containerMedia = document.querySelector(".lightbox-image");

    containerMedia.innerHTML = lightboxPics[count].innerHTML; //open in container

    lightboxBackground.style.display = "block"; //display lightbox
  })
);

lightboxPics.forEach((img) =>
  img.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
      count = e.target.firstChild.getAttribute("data-id"); //open selected image in container using keydown
      count = parseInt(count) + 1;

      containerMedia.innerHTML = lightboxPics[count].innerHTML;

      lightboxBackground.style.display = "block"; //display lightbox
      attributeFocus(e);
    }
  })
);

//when using keyboard add focus on lightbox element covering main page
function attributeFocus(e) {
  document.getElementById("lightbox").focus(e);
  document.querySelector("#nav-right").focus(e);
  document.querySelector("#nav-left").focus(e);
}
//event listeners to navigate images left and right
next.addEventListener("click", () => {
  count = parseInt(count) + 1;

  if (count > lightboxPics.length - 1) {
    count = 0;
  }

  containerMedia.innerHTML = lightboxPics[count].innerHTML;
});

prev.addEventListener("click", () => {
  count = parseInt(count) - 1;

  if (count < 0) {
    count = lightboxPics.length - 1;
  }

  containerMedia.innerHTML = lightboxPics[count].innerHTML;
});

// Functions to display elements
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

function closeLightbox() {
  lightboxBackground.style.display = "none";
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
dropBtn.forEach((btn) => btn.addEventListener("keydown", sortMenu));

// Function to display elements using keydown escape
document.addEventListener("keydown", function (event) {
  if (event.key === "Escape") {
    dropMenu.style.display = "none";
    lightboxBackground.style.display = "none";
    modalBackground.style.display = "none";
  }
});

//increment counter to add like

let counterPlus = document.querySelectorAll(".btn-like");

counterPlus.forEach((btn) => btn.addEventListener("click", sortCounter));
//get by method to recover info on likes and price
let totalLikes = data.medias
  .map((m) => m.likes)
  .reduce((total, value) => total + value);
document.getElementById("total-likes").innerHTML = totalLikes;
document.getElementById("prix").innerHTML = data.photographer.price;
//function to modify likes on click
function sortCounter(e) {
  console.log("test");
  let numberOfLikes = e.currentTarget
    .closest(".likes")
    .querySelector(".portfolio-likes");
  numberOfLikes.innerHTML = parseInt(numberOfLikes.innerHTML) + 1;
  //add 1 to total likes
  document.getElementById("total-likes").innerHTML = ++totalLikes;
}

//contact form validation
document
  .querySelector('#contactForm input[type="submit"]')
  .addEventListener("click", (e) => {
    e.preventDefault();
    let fields = document.querySelectorAll(
      "#contactForm input,#contactForm select,#contactForm textarea"
    );
    let valid = true;
    for (let field of fields) {
      //for loop to verify fields are filled in
      valid &= check(field);
    }
    if (valid) {
      for (let field of fields) {
        console.log(field.value);
      }
      closeModal(); // if form complet close modal
    }
  });

function check(input) {
  input.setCustomValidity("");
  if (input.validity.tooShort) {
    // verify fields are filled in according to conditions
    input.setCustomValidity(
      `this field must contain at least ${input.minLength} caracters`
    );
  }
  if (input.validity.valueMissing) {
    input.setCustomValidity("this field is mandatory");
  }
  return input.reportValidity();
}
