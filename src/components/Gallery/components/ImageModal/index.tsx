import { IImageModal } from "./types";
import { FC } from "react";
import './style.scss';

export const ImageModal: FC<IImageModal> = ({ image, onCloseModal }) => {
  const { width, height, urls, alt_description } = image;
  return (
    <div className="imageModal">
      <button onClick={onCloseModal}>
        X
      </button>
      <img
        src={urls.full}
        alt={alt_description}
        style={
          width > height ? {
            width: '100%',
          } : {}
        }
      />
    </div>
  );
}