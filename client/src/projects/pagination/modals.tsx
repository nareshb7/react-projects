export interface PaginationProps {
    activePage: number;
    pageSize: number;
    totalItems: number;
    onPrevClick?: (n: number) => void;
    onNextClick?: (n: number) => void;
    onPageClick?: (n: number) => void;
    onPageSizeChange?: (n: number) => void;
  }