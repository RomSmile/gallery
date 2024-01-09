import { IGallery } from "../../../../types";

export interface IImageModal {
  image: IGallery;
  onCloseModal: () => void;
}