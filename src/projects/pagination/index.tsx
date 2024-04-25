import React from "react";
import "./styles.scss";
import PaginationTable from "./components/Table";
import PaginationComp from "./components/Pagination";

const Pagination = () => {
  return (
    <div className="flex justify-center flex-col">
      <h3 className="font-bold">Pagination</h3>
      <PaginationTable />
      <PaginationComp />
    </div>
  );
};

export default Pagination;
