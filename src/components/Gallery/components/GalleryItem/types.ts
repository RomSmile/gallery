import {IGallery} from "../../../../types";

export interface IGalleryItem {
  image: IGallery;
  onSelectImage: (image: IGallery) => void;
}
