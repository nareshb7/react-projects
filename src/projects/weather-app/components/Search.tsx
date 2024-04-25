import React from "react";
import { Button, Input } from "common/Components";
import { SearchProps } from "../modals";

const Search = ({ handleChange, handleSearch, city }: SearchProps) => {
  return (
    <div>
      <Input value={city} onChange={handleChange} />
      <Button title="Search" onClick={handleSearch} />
    </div>
  );
};

export default Search;
