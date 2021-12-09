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

  return titles.sort(titles);
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

let addLike = document.querySelectorAll(".btn-like");

addLike.addEventListener("click", () => {
  ++
  console.log(addLike)
});
function sort() {
  byPopularity.addEventListener("click", () => {
    document.querySelector("#portfolio").innerHTML = ""; // Vider le contenu du #portfolio
    data.medias.sort((a, b) => (a.likes > b.likes ? -1 : 1)); //  Récupérer la tri et le sort du tableau data.medias
    document.querySelector("#portfolio").appendChild(getMedias(data.medias)); //Relancer ("#portfolio")
  });
}

const numberOfLikes = document.querySelectorAll(".portfolio-likes");
const plusCounter = document.querySelector(".btn-like");
let counterValue = data.medias.likes;

plusCounter.addEventListener("click", () => {
  console.log(counterValue);
});

printTotalLikes();
// document.getElementById('nb-likes').textContent = totalLikes;
var like = document.querySelectorAll(".portfolio-likes");
for (let x of like) {
    x.addEventListener("click", increment);
    x.addEventListener("keydown", increment);
}


function printTotalLikes() {
  document.querySelectorAll(".portfolio-likes").textContent = totalLikes;
}

const byPopularity = document.querySelector(".sort-popularity");
const byTitle = document.querySelector(".sort-title");
const byDate = document.querySelector(".sort-date");

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

function sort(filter) {
  byPopularity.addEventListener("click", () => {
    document.querySelector("#portfolio").innerHTML = ""; // Vider le contenu du #portfolio
    data.medias.sort((a, b) => (a.filter > b.filter ? -1 : 1)); //  Récupérer la tri et le sort du tableau data.medias
    document.querySelector("#portfolio").appendChild(getMedias(data.medias)); //Relancer ("#portfolio")
  });
}



data.medias.sort((a, b) => (a.likes > b.likes ? -1 : 1));
data.medias.sort((a, b) => (a.title > b.title ? 1 : -1));
data.medias.sort((a, b) => (a.date > b.date ? 1 : -1));
function addEvent() {
  byPopularity.addEventListener("click", sort);
  byPopularity.addEventListener("keydown", sort);
  byTitle.addEventListener("click", sort);
  byTitle.addEventListener("keydown", sort);
  byDate.addEventListener("click", sort);
  byDate.addEventListener("keydown", sort);
}

function sort(filter) {
 
    document.querySelector("#portfolio").innerHTML = ""; // Vider le contenu du #portfolio
    data.medias.sort(() => "a." + filter > "b." + filter);//  Récupérer la tri et le sort du tableau data.medias
    document.querySelector("#portfolio").appendChild(getMedias(data.medias)); //Relancer ("#portfolio")
 
    if (filter === "likes") {
      byPopularity.addEventListener("click", () => {
        sorted((a, b) => (a.likes > b.likes ? -1 : 1));
      });
      
    }
    if (filter === "title") {
      sorted((a, b) => (a.title > b.title ? 1 : -1));
    }
    if (filter === "date") {
      sorted((a, b) => (a.date > b.date ? 1 : -1));
    }

};


counterPlus.addEventListener("click",()=>{
counter ++
counterTotal.innerHTML = counterValue;
});






