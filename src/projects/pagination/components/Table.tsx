import React, { useEffect, useState } from "react";
import PaginationComp from "./Pagination";
const data = Array(113)
  .fill(1)
  .map((_, i) => ({id: i+1}));

const PaginationTable = () => {
  const [tableData, setTableData] = useState(data.slice(5, 10));
  const [activePage, setActivePage] = useState(1);
  const [pageSize, setPageSize] = useState(10);
  const onPrevClick = (page: number) => {
    setActivePage(page);
  };
  const onNextClick = (page: number) => {
    setActivePage(page);
  };
  const onPageClick = (page: number) => {
    setActivePage(page);
  };
  const onPageSizeChange = (size: number) => {
    setPageSize(size);
  };
  useEffect(() => {
    const strtIndex = (activePage-1) * pageSize;
    setTableData(data.slice(strtIndex, strtIndex + pageSize));
  }, [activePage, pageSize]);

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Serial No</th>
            <th>Name</th>
            <th>Role</th>
          </tr>
        </thead>
        <tbody>
          {tableData.map((val) => {
            return (
              <tr key={val.id}>
                <td>{val.id}</td>
                <td>test{val.id + 1}</td>
                <td>role{val.id + 1}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <PaginationComp
        onPrevClick={onPrevClick}
        onNextClick={onNextClick}
        onPageClick={onPageClick}
        onPageSizeChange={onPageSizeChange}
        activePage={activePage}
        totalItems={data.length}
        pageSize={pageSize}
      />
    </div>
  );
};

export default PaginationTable;
