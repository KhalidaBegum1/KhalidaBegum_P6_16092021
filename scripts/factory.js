import { video } from "./video.js";
import { image } from "./image.js";

export class factory {
  constructor(media, index) {
    if (media.video) {
      return new video(media, index);
    }
    return new image(media, index);
  }
}
// creating objects of same type using constructor

