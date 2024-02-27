import React, { useState } from "react";
import RadioBtn from "./RadioBtn";
import { RadioButtonsData } from "../dict";

export default function Search({ handleSearch }) {
  const [searchStr, setSearchStr] = useState("");
  const [type, setType] = useState("all");
 
  const handleChange = (e) => {
    setSearchStr(e.target.value);
  };

  const handleFilter = (typeValue) => {
    setType(typeValue);
    handleSearch(searchStr, typeValue);
  };

  const handleKey = (e) => {
    if (e.key === "Enter") {
      handleSearch(searchStr, type);
    }
  };

  return (
    <div className="input-field">
      <input
        value={searchStr}
        name="searchStr"
        onChange={handleChange}
        onKeyDown={handleKey}
        className="validate"
        placeholder="search"
        type="text"
      />
      <div className="row">
        {RadioButtonsData.map((btn) => (
          <RadioBtn
            key={btn.id}
            checked={type === btn.typeProp}
            disabled={!searchStr}
            handleFilter={handleFilter}
            {...btn}
          />
        ))}
      </div>
      <button
        onClick={() => handleSearch(searchStr, type)}
        className="btn search-btn"
        disabled={!searchStr}
      >
        Search
      </button>
    </div>
  );
}
