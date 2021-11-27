/*sort
portfolio-pic likes = popularité largest number to smallest
portfolio-pic date = date - oldest to most recent
portfolio-pic title = media title

- let getLikes = searchparam
- let likes = numberOfLikes each media
- function sortLikes = sortLikes from most likes to least
- logLikes
- click popular to display in order of numberOfLikes*/

//Sort
//get button and add event listener on click
const byPopularity = document.querySelector(".sort-popularity");
const byTitle = document.querySelector(".sort-title");
const byDate = document.querySelector(".sort-date");
const likes = document.querySelector[".portfolio-likes"];
const titles = document.querySelector(".titles");

byPopularity.addEventListener("click");
byTitle.addEventListener("click");
byDate.addEventListener("click");

//-add parameter to url
//- add a href

//-recover info from json ie likes+results/title+results
const urlLikes = +new URLSearchParams(location.search).get("likes");
const urlTitles = new URLSearchParams(location.search).get("title");
const urlDate = new URLSearchParams(location.search).get("date");

// display results

/*
const like = data.media.likes((media) => {
  return data.media.likes === urlLikes;
});*/
document.querySelector("#photographer_likes").appendChild(getLikes(media));

const getLikes = (media) => {
  return convertStringToHTML(
    media.likes
      .map((media) => {
        return `<a href="photograph.html?likes=${media.likes}">
          <span class="portfolio-likes">${media.likes} ❤</span>
        </a>`;
      })
      .join("")
  );
};
//byPopularity.addEventListener("click", );
const getLikes = (media, index) => {
  return `
    <article class="portfolio-pics">
        <div class="portfolio-text" data-id="${index}"> 
       <a href="photograph.html?likes=${media.likes}"> <span class="portfolio-likes">${media.likes} ❤</span> </a>  
        </div> 
      </div>
    </article>
  `;
};

byPopularity.addEventListener("click", () => {
  return media.likes;
});

//console.log(media.likes);

const titleSort = function sortByTitle(a, b) {
  if (a > b) return 1;
  if (b > a) return -1;

  return title.sort(title);
};
byTitle.addEventListener("click", titleSort);

byPopularity.addEventListener("click", (getLikes) => {
  return `
  <a href="photograph.html?likes=${media.likes}"> <span class="portfolio-likes">${media.likes} ❤</span> </a> 
  `;
});
getLikes.sort(getLikes);
//console.log(getLikes);

const numberOfLikes = ["2", "6", "8", "5"];
numberOfLikes.sort();
console.log(numberOfLikes);

loadData().then((data) => {
  if (like) {
    return data.media.sort((media) => media.likes.includes(like));
  }
  return data.media;
});

const date = [{ media: "date" }];
const sortByDate = (date) => {
  const sorter = (a, b) => {
    return new Date(a.date).getTime() - new Date(b.date).getTime();
  };
  date.sort(sorter);
};
sortByDate(date);
console.log(date);

function GetSortOrder(prop) {
  return function (a, b) {
    if (a[prop] > b[prop]) {
      return 1;
    } else if (a[prop] < b[prop]) {
      return -1;
    }
    return 0;
  };
}
// increment likes

const addLike = document.querySelectorAll(".portfolio-likes");
