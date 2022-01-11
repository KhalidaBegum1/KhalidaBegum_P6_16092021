export const convertStringToHTML = (innerHTML) => {
  const div = document.createElement("div");  //create inner divs
  div.innerHTML = innerHTML;
  //profile fragments (container)
  const fragment = document.createDocumentFragment();
  Array.from(div.children).forEach((child) => fragment.appendChild(child));
  return fragment;
};

export const loadData = async () => {//async return a Promise
  return await fetch("./data/FishEyeData.json").then((response) =>
    response.json()
  );//wait for a Promise 
};
