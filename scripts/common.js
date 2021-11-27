export const convertStringToHTML = (innerHTML) => {
  const div = document.createElement("div");
  div.innerHTML = innerHTML;

  const fragment = document.createDocumentFragment();
  Array.from(div.children).forEach((child) => fragment.appendChild(child));
  return fragment;
};

export const loadData = async () => {
  return await fetch("./data/FishEyeData.json").then((response) =>
    response.json()
  );
};
