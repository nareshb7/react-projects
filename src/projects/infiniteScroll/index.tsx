import React, { useState } from "react";
import "./style.scss";
import Table from "./components/Table";
const data = Array(100)
  .fill(1)
  .map((_, i) => ({ id: i + 1, name: `Test${i + 1}` }));

const InfiniteScrollMain = () => {
  const [currentData, setCurrentData] = useState(data.slice(0, 10));
  const [isLoading, setIsLoading] = useState(false);
  const loadMore = (len: number) => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      if (len < data.length) {
        const dt = data.slice(0, len + 10);
        setCurrentData(dt);
      }
    }, 1500);
  };
  return (
    <div className="infinite-scroll-wrapper">
      <span className="font-bold text-center">Infinite Scroll Main</span>
      <Table
        data={currentData}
        loadMore={loadMore}
        isLoading={isLoading}
        hasData={data.length !== currentData.length}
      />
    </div>
  );
};

export default InfiniteScrollMain;
