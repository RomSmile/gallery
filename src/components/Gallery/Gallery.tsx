import {FC, useState} from "react";
import { IGalleryProps } from "./types";
import { GalleryItem } from "./components/GalleryItem";
import './style.scss';
import {Pagination} from "./components/Pagination";
import {IGallery} from "../../types";
import {ImageModal} from "./components/ImageModal";

const Gallery: FC<IGalleryProps> = ({
  gallery,
  goPrevPage,
  goNextPage,
  lastPage,
  currentPage,
  goToSelectedPage
}) => {
  const [currentImage, setCurrentImage] = useState<IGallery | null>(null);
  const onSelectImage = (image: IGallery) => {
    setCurrentImage(image);
  }

  const onCloseModal = () => {
    setCurrentImage(null);
  }

  return (
    <>
      <div className="gallery-container">
        {gallery?.map((galleryItem) => {
          return (
            <GalleryItem
              image={galleryItem}
              key={galleryItem.urls.raw}
              onSelectImage={onSelectImage}
            />
          );
        })}
        {currentPage && lastPage && (
          <Pagination
            goNextPage={goNextPage}
            goPrevPage={goPrevPage}
            currentPage={currentPage}
            lastPage={lastPage}
            goToSelectedPage={goToSelectedPage}
          />
        )}
      </div>
      {currentImage && (
        <ImageModal image={currentImage} onCloseModal={onCloseModal} />
      )}
    </>
  )
}

export default Gallery;
