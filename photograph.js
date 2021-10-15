import { loadData, convertStringToHTML } from "./common.js";

const getPhotographerBio = (photographer) => {
  return convertStringToHTML(`
  <div class="profile-text">
    <h1>${photographer.name}</h1>
  
    <span>${photographer.city}, ${photographer.country}</span>
    <p>${photographer.tagline}</p>
    <span>${photographer.price}€/jour</span>
  </div>
  <span class="profile-pic">
    <img
    height="150"
    width="150"
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
        return `<span> <li><a href="#">#${tag}</a></li></span> `;
      })
      .join("")
  );
};

const getVideo = (media) => {
  return `  
  <article class="portfolio-pics">
   <div>
     <video height="190" width="335" controls>
       <source
         src="Sample Photos/${media.photographerId}/${media.video}"
         type="Video" alt="${media.title}"
       />
     </video>

     <span class="portfolio-text">${media.title}</span>
     <span>${media.likes} ❤</span>
   </div>
 </article>
`;
};
const getImage = (media) => {
  return `
    <article class="portfolio-pics">
      <div>
        <img
        height="190"
        width="335"
          src="Sample Photos/${media.photographerId}/${media.image}"
          alt="${media.title}"
        />
        <span class="portfolio-text">${media.title}</span>
        <span>${media.likes} ❤</span>
      </div>
    </article>
  `;
};

const getMedia = (media) => {
  if (media.video) {
    return getVideo(media);
  }
  return getImage(media);
};

const getMedias = (medias) => {
  return convertStringToHTML(medias.map((media) => getMedia(media)).join(""));
};

const urlPhotographerId = +new URLSearchParams(location.search).get(
  "photographerId"
);

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
});

/*
const displayPhotographerProfile = () => {
  document.getElementById("243").appendChild(photographerProfile());
};

const loadData = async () => {
  return await fetch("./FishEyeData.json").then((response) => response.json());
};

const getImage = (media) => {
  return convertStringToHtml(
    `<img src="./Sample Photos/Mimi/${getPhotographerId()}/${media.image}"/>`
  );
};

const getPhotographerMedias = (medias) => {
  return medias.filter((media) => {
    return media.photographerId === getPhotographerId() && !media.video;
  });
};

loadData().then((data) => {
  getPhotographerMedias(data.media).forEach((image) => {
    document.getElementById("portfolio").appendChild(getImage(image));
  });
});*/
