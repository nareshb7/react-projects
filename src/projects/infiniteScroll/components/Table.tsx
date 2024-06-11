import React, { useEffect, useRef } from "react";
import { TableProps } from "../types";

const Table = ({ data, isLoading, hasData, loadMore }: TableProps) => {
  const divRef = useRef<HTMLDivElement>(null);
  const handleScroll = () => {
    const { scrollTop, scrollHeight, clientHeight } =
      divRef.current as HTMLDivElement;
    if (scrollTop + clientHeight >= scrollHeight - 5) {
      hasData && loadMore(data.length);
    }
  };
  useEffect(() => {
    if (divRef.current) {
      divRef.current.addEventListener("scroll", handleScroll);
    }
    return () => {
      if (divRef.current) {
        divRef.current.removeEventListener("scroll", handleScroll);
      }
    };
  }, [data]);
  return (
    <div ref={divRef} className="infinite-scroll-list">
      <ul>
        {data.map((item) => (
          <li key={item.id} className="infinite-scroll-item">
            {item.id}: {item.name}
          </li>
        ))}
        {!hasData && <li className="loading">...No more Data...</li>}
        {isLoading && <li className="loading">Loading...</li>}
      </ul>
    </div>
  );
};

export default Table;
