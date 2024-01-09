import { FC } from "react";
import {IGalleryItem} from "./types";

export const GalleryItem: FC<IGalleryItem> = ({
  image,
  onSelectImage
}) => {
  const {
    urls,
    alt_description,
    user,
    width,
    height,
  } = image;

  return (
    <div className="gallery-container__item" onClick={() => onSelectImage(image)}>
      <img
        src={urls.small_s3}
        alt={alt_description}
        style={
          width > height ? {
            width: '100%',
          } : {
            height: '100%',
          }
        }
      />
      <p>{user.first_name}</p>
    </div>
  );
}
