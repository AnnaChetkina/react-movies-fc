import React from "react";
export default function RadioBtn({
  checked,
  disabled,
  value,
  text,
  handleFilter,
}) {
  return (
    <div className="col s3">
      <label>
        <input
          name="type"
          type="radio"
          checked={checked}
          disabled={disabled}
          value={value}
          onChange={(e) => handleFilter(e.target.value)}
        />
        <span>{text}</span>
      </label>
    </div>
  );
}
