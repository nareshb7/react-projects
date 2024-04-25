import { Button } from "common/Components";
import React from "react";

const PaginationComp = () => {
  return (
    <div className="flex items-center gap-1">
      <div>
        <Button title="Prev" />
        <Button title="1" />
        <Button title="2" />
        <Button title="3" />
        <Button title="Next" />
      </div>
      <div>
        <select className="border p-2 border-blue-500">
            <option>10</option>
            <option>20</option>
            <option>30</option>
            <option>40</option>
            <option>50</option>
        </select>
      </div>
      <div>
       Total 5 of 10 Pages
      </div>
    </div>
  );
};

export default PaginationComp;
