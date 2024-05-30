import React from "react";
import { Button } from "common/Components";
import { ViewPageProps } from "../types";
import { formFieldTitle } from "../constant";

const ViewPage = ({ userData, onBack }: ViewPageProps) => {
  return (
    <div>
      {Object.entries(userData).map((field) => (
        <div key={field[0]}>
          <span className="font-bold inline-block w-32">{formFieldTitle[field[0]]} :</span>{" "}
          {field[0] === "file" ? (
            <img src={field[1]} alt="img" />
          ) : (
            <span>{field[1]}</span>
          )}
        </div>
      ))}
      <Button title="Back" onClick={onBack} />
    </div>
  );
};

export default ViewPage;
