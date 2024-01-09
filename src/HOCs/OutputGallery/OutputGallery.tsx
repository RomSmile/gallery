import {useEffect} from "react";
import { Gallery } from '../../components';
import {getGallery} from "../../store/gallery/getGalleryAction";
import {useAppDispatch, useAppSelector} from "../../hooks/redux";
import {decrementPage, incrementPage, setPage} from "../../store/gallery/gallerySlice";


const OutputGallery = () => {
  const dispatch = useAppDispatch();
  const {
    lastPage,
    currentPage,
    gallery,
    loading,
    error
  } = useAppSelector((state) => state.gallery)

  useEffect(() => {
    if (currentPage) {
      dispatch(getGallery(currentPage));
    } else {
      dispatch(getGallery(1));
    }
  }, [currentPage, dispatch]);

  const onNextPage = () => {
    dispatch(incrementPage());
  }

  const onPrevPage = () => {
    dispatch(decrementPage());
  }

  const onGoToSelectedPage = (page: number) => {
    dispatch(setPage(page))
  }

  return <Gallery
    gallery={gallery}
    lastPage={lastPage}
    loading={loading}
    error={error}
    currentPage={currentPage}
    goNextPage={onNextPage}
    goPrevPage={onPrevPage}
    goToSelectedPage={onGoToSelectedPage}
  />
}

export default OutputGallery;