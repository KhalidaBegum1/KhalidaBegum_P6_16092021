export class image {
  constructor(media, index) {
    Object.assign(this, media);
    this.index = index;
  }
  display() {
    return `
      <article class="portfolio-pics">
        <div>
          <a href="#"><img 
            src="Sample Photos/${this.photographerId}/${this.image}"
            alt="${this.title}"
            data-id="${this.index}"
          /></a>
          <div class="portfolio-text" data-id="${this.index}">
        <span class="titles" aria-label="title">${this.title}</span>
      <div class="likes" aria-label="likes"> <span class="portfolio-likes">${this.likes} </span><button class="btn-like"> ❤</button> </div>
          </div> 
        </div>
      </article>
    `;
  }
}
