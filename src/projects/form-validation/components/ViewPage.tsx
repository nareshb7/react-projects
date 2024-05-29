import React from "react";
import { Button } from "common/Components";
import { ViewPageProps } from "../types";
import { formFieldTitle } from "../constant";

const ViewPage = ({ userData, onBack }: ViewPageProps) => {
  return (
    <div>
      {Object.entries(userData).map((field) => (
        <div key={field[0]}>
          <span className="font-bold">{formFieldTitle[field[0]]} :</span>{" "}
          <span>{field[1]}</span>
        </div>
      ))}
      <Button title="Back" onClick={onBack} />
    </div>
  );
};

export default ViewPage;
