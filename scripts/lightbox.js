//lightbox arrows
const next = document.getElementById("#nav-right");
const prev = document.getElementById("#nav-left");
let count = 0;

const lightboxDiaporama = document.querySelectorAll(".portfolio-pics");
const nbSlide = lightboxDiaporama.length;
const next = document.getElementById("#nav-right");
const prev = document.getElementById("#nav-left");
let count = 0;

function slideNext() {
 /* // Incrémente le compteur
  count++;
  if (count == nbSlide) {
    // Si on dépasse la fin du diaporama, on "rembobine"
    count = 0;
  }*/

}
next.addEventListener("click", slideNext);

function slidePrev() {
  //Décrémente le compteur
  count--;
  if (count < 0) {
    // Si on dépasse le début du diaporama, on repart à la fin
    count = nbSlide - 1;
  }
}
prev.addEventListener("click", slidePrev);

const next = document.getElementById("#nav-right");
const prev = document.getElementById("#nav-left");
let count = 0;
let newCount = count;

next.addEventListener("click", slideNext);
  function slideNext() {
    let newCount = count;
    console.log(newCount);

    newCount = parseInt(newCount) + 1;
    console.log(newCount);
  };


loadData().then((data) => {
  const photographer = data.photographers.find((photographer) => {
    return photographer.id === urlPhotographerId;
  });
  const media = data.media.filter((media) => {
    return media.photographerId === urlPhotographerId;
  });

  document.title = photographer.name;
  document
    .querySelector("#photographer_bio")
    .appendChild(getPhotographerBio(photographer));

  document
    .querySelector("#photographer_tags")
    .appendChild(getTags(photographer));

  document.querySelector("#portfolio").appendChild(getMedias(media));
  const lightboxPics = document.querySelectorAll(".portfolio-pics");

  //console.log(lightboxPics);
  lightboxPics.forEach((img) =>
    img.addEventListener("click", (e) => {
      let count = e.target.getAttribute("data-id");

      let containerMedia = document.querySelector(".lightbox-image");

      containerMedia.innerHTML = lightboxPics[count].innerHTML;

      lightboxBackground.style.display = "block";
    })
  );
  const closeBox = lightboxBackground.querySelector(".lightbox-close");

  closeBox.addEventListener("click", closeLightbox);

  const next = document.querySelector("#nav-right");
  const prev = document.querySelector("#nav-left");
  next.addEventListener("click", slideNext);
  prev.addEventListener("click", slidePrev);
  //console.log(diaporamaPic);

  //const nbSlide = diaporamaPic.length;

  //let count = 0;
  //let newCount = count;
});

function closeLightbox() {
  lightboxBackground.style.display = "none";
}

function launchLightbox(e) {
  console.log(e.target);
  lightboxBackground.style.display = "block";
}
//e.target.getAttribute("data-id");

var slide = new Array(".portfolio-pics");
var numero = 0;

function ChangeSlide(sens) {
  numero = numero + sens;
  if (numero < 0) numero = slide.length - 1;
  if (numero > slide.length - 1) numero = 0;
  document.getElementById("lightbox").src = slide[numero];
}
next.addEventListener("click",function(){


//1 - recover count index
//let newCount = count;
//console.log(newCount)

//2 - add 1 to count
newCount=parseInt(newCount) +1;
console.log(newCount);
containerMedia.innerHTML = lightboxPics[newCount].innerHTML;
});

const next = document.querySelector("#nav-right");
const prev = document.querySelector("#nav-left");
  //next.addEventListener("click", slideNext);
  // prev.addEventListener("click", slidePrev);
  //console.log(diaporamaPic);

  //const nbSlide = diaporamaPic.length;

  let count = 0;
  let newCount = count;
  let containerMedia = document.querySelector(".lightbox-image");

  next.addEventListener("click", (slideNext) => {
    //1 - recover count index

    //let count = 0;
    //let newCount = count;
    console.log(count);
    //2 - add 1 to count
    newCount = parseInt(newCount) + 1;
    console.log(newCount);

    containerMedia.innerHTML = lightboxPics[newCount].innerHTML;
  });

  prev.addEventListener("click", ()=>{
    //1 - recover count index

    //let count = 0;
    //let newCount = count;
    console.log(count);
    //2 - add 1 to count
    newCount = parseInt(newCount) - 1;
    console.log(newCount);

    containerMedia.innerHTML = lightboxPics[newCount].innerHTML;
  });

  function slideNext() {
    /// Incrémente le compteur
     count++;
     if (count == nbSlide) {
       // Si on dépasse la fin du diaporama, on "rembobine"
       count = 0;
     }
   
   }
   for (let i =0;i<5;i++){
     console.log(loop);
   };
   /*
function slideNext() {
  if (count < nbSlide - 1) {
    count++;
  } else {
    count = 0;
  }
 
};

function slidePrev() {
  /if (count > 0) {
    count--;
  } else {
    count = nbSlide - 1;
  }
  console.log("slider prev");//
}

*/