export interface IPagination {
  goNextPage: () => void;
  goPrevPage: () => void;
  currentPage: number;
  lastPage: number;
  goToSelectedPage: (page: number) => void;
}
