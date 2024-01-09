import {FC, useEffect, useState} from "react";
import { IPagination } from "./types";
import './style.scss';

export const Pagination: FC<IPagination> = ({
  goNextPage,
  goPrevPage,
  lastPage,
  currentPage,
  goToSelectedPage
}) => {
  const [selectedPage, setSelectedPage] = useState<number>(currentPage);
  const changePage = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedPage(+e.target.value)
  }

  const switchPage = () => {
    goToSelectedPage(selectedPage);
  }

  useEffect(() => {
    setSelectedPage(currentPage)
  }, [currentPage]);

  return (
    <div className="pagination-container" key="asdf">
      <div>
        <button onClick={goPrevPage} disabled={currentPage === 1}>{`<`}</button>
        <button onClick={goNextPage} disabled={currentPage === lastPage}>{`>`}</button>
      </div>

      <div>
        <input type="number" onChange={changePage} value={selectedPage} max={lastPage} />
        <button onClick={switchPage}>Go to {selectedPage} page</button>
      </div>
    </div>
  )
}