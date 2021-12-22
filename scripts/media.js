import { convertStringToHTML } from "./common.js";

const getVideo = (media, index) => {
  return `  
    <article class="portfolio-pics">
     <div>
     <a href="#">
       <video controls data-id="${index}">
         <source
           src="Sample Photos/${media.photographerId}/${media.video}"
           type="Video" alt="${media.title}"
         />
       </video>
       </a>
  <div class="portfolio-text" data-id="${index}">
 <span class="titles">${media.title}</span>
   <span class="portfolio-likes">${media.likes}</span><button class="btn-like"> ❤</button>
       </div>
     </div>
   </article>
  `;
};

const getImage = (media, index) => {
  return `
      <article class="portfolio-pics">
        <div>
          <a href="#"><img 
            src="Sample Photos/${media.photographerId}/${media.image}"
            alt="${media.title}"
            data-id="${index}"
          /></a>
          <div class="portfolio-text" data-id="${index}">
        <span class="titles" aria-label="title">${media.title}</span>
      <div id="likes">  <span class="portfolio-likes">${media.likes}</span> <button class="btn-like"> ❤</button> </div>
          </div> 
        </div>
      </article>
    `;
};

const getMedia = (media, index) => {
  if (media.video) {
    return getVideo(media, index);
  }
  return getImage(media, index);
};

export const getMedias = (medias) => {
  return convertStringToHTML(
    medias.map((media, index) => getMedia(media, index)).join("")
  );
};
