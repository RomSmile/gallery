import {IGallery} from "../../types";

export interface IGalleryProps {
  gallery: IGallery[] | null;
  lastPage: number | null;
  currentPage: number | null;
  loading: boolean;
  error: string;
  goNextPage: () => void;
  goPrevPage: () => void;
  goToSelectedPage: (page: number) => void;
}