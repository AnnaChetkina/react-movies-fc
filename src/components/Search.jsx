import React, { useEffect, useState } from "react";
import RadioBtn from "./RadioBtn";
import { RadioButtonsData } from "../dict";

export default function Search({ handleSearch }) {
  const [searchStr, setSearchStr] = useState("");
  const [type, setType] = useState("all");

  useEffect(() => {
    let timeout = null;
    if (searchStr) {
       timeout = setTimeout(() => {
        console.log(timeout);
        handleSearch(searchStr, type);
      }, 1000);
    }
    return () => {
      clearTimeout(timeout);
    };
  }, [searchStr]);

  const handleChange = (e) => {
    setSearchStr(e.target.value);
  };

  const handleFilter = (typeValue) => {
    setType(typeValue);
    handleSearch(searchStr, typeValue);
  };

  return (
    <div className="input-field">
      <input
        value={searchStr}
        name="searchStr"
        onChange={handleChange}
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
    </div>
  );
}
