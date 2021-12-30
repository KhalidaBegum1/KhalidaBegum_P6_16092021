export class video {
  constructor(media, index) {
    Object.assign(this, media);
    this.index = index;
  }
  display() {
    return `  
        <article class="portfolio-pics">
         <div>
         <a href="#">
           <video controls data-id="${this.index}">
             <source
               src="Sample Photos/${this.photographerId}/${this.video}"
               type="Video" alt="${this.title}"
             />
           </video>
           </a>
      <div class="portfolio-text" data-id="${this.index}">
     <span class="titles">${this.title}</span>
     <div class="likes">  <span class="portfolio-likes">${this.likes}</span><button class="btn-like"> ❤</button></div>
           </div>
         </div>
       </article>
      `;
  }
}