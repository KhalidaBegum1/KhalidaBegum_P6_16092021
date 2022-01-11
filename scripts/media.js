import { convertStringToHTML } from "./common.js";
import { factory } from "./factory.js";

export const getMedias = (medias) => { //recover general media and display
  return convertStringToHTML(
    medias
      .map((media, index) => {
        let m = new factory(media, index);
        return m.display();
      })
      .join("")
  );
};
//create inner divs
