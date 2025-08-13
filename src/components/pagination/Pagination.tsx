import { FC } from "react";
import { Button } from "../button";

import "./Pagination.css"

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

const Pagination: FC<PaginationProps> = ({ currentPage, totalPages, onPageChange }) => {
  return (
    <div className="pagination">
      <Button disabled={currentPage === 1} onClick={() => onPageChange(currentPage - 1)}>Prev</Button>
      <span> Page {currentPage} of {totalPages} </span>
      <Button disabled={currentPage === totalPages} onClick={() => onPageChange(currentPage + 1)}>Next</Button>
    </div>
  );
}

export { Pagination };
