import { Button } from "common/Components";
import React, { useEffect, useState } from "react";
import { PaginationProps } from "../modals";

const getLastPage = (totalItems: number, itemsPerPage: number) => {
  return Math.ceil(totalItems / itemsPerPage);
};
const getPagesList = (currentPage: number, totlaPages: number) => {

  const generatePreviousPages = (currentPage: number) => {
    if (currentPage > 2) {
      return [
        currentPage - 2,
        currentPage - 1,
      ];
    }
    if (currentPage > 1) {
      return [currentPage - 1];
    }
    return [];
  };
  const generateNextPages = () => {
    if (currentPage +1 < totlaPages) {
      return [currentPage + 1, currentPage + 2];
    }
    if (currentPage < totlaPages) {
      return [currentPage + 1];
    }
    return [];
  };
  const leftSidePages = generatePreviousPages(currentPage);
  const rightSidePages = generateNextPages();
  const array = [...leftSidePages, currentPage, ...rightSidePages]
  if (!array.includes(1) && !array.includes(totlaPages)) {
    return [1, 1111,...array, 1111, totlaPages]
  }
  if (array.includes(1)) {
    return [...array, 1111, totlaPages]
  }
  if(array.includes(totlaPages)) {
    return [1, 1111,...array]
  }
  return array;
};
const PaginationComp = ({
  totalItems,
  activePage,
  pageSize,
  onNextClick,
  onPageClick,
  onPageSizeChange,
  onPrevClick,
}: PaginationProps) => {
  const [currentPage, setCurrentPage] = useState(activePage);
  const [itemsPerPage, setItemsPerPage] = useState(pageSize);
  const [lastPage, setLastPage] = useState<number>(
    getLastPage(totalItems, itemsPerPage)
  );
  const [pagesList, setPagesList] = useState<number[]>(
    getPagesList(currentPage, lastPage)
  );
  const handlePrevClick = () => {
    if (currentPage > 1) {
      setCurrentPage((c) => c - 1);
      onPrevClick && onPrevClick(currentPage - 1);
    }
  };
  const handleNextClick = () => {
    if (currentPage < lastPage) {
      setCurrentPage((c) => c + 1);
      onNextClick && onNextClick(currentPage + 1);
    }
  };
  const handlePageClick = (pageNo: number) => {
    setCurrentPage(pageNo);
    onPageClick && onPageClick(pageNo);
  };
  const handlePerPageItemsChange = (
    e: React.ChangeEvent<HTMLSelectElement>
  ) => {
    const { value } = e.target;
    const pageSize = Number(value);
    console.log("VALUE::", value);
    setItemsPerPage(pageSize);
    setCurrentPage(1)
    onPageSizeChange && onPageSizeChange(pageSize);
    onPageClick && onPageClick(1);
  };
  useEffect(() => {
    setLastPage(getLastPage(totalItems, itemsPerPage));
    setPagesList(
      getPagesList(currentPage, getLastPage(totalItems, itemsPerPage))
    );
  }, [totalItems, itemsPerPage, currentPage]);
  return (
    <div className="flex items-center gap-1 pagination">
      <div>
        <Button onClick={handlePrevClick} title="Prev" />
        {pagesList.map((page) => {
          if (page === 1111) {
            return "....";
          }
          return (
            <Button
              key={page}
              onClick={() => handlePageClick(page)}
              title={page.toString()}
              className={`${currentPage === page && "active"} `}
            />
          );
        })}
        <Button onClick={handleNextClick} title="Next" />
      </div>
      <div>
        <select
          defaultValue={itemsPerPage}
          onChange={handlePerPageItemsChange}
          className="border p-2 border-blue-500"
        >
          <option>10</option>
          <option>20</option>
          <option>30</option>
          <option>40</option>
          <option>50</option>
        </select>
      </div>
      <div>
        Total {currentPage} of {lastPage} Pages
      </div>
    </div>
  );
};

export default PaginationComp;
