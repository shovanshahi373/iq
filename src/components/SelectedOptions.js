import React from "react";
import Option from "./Option";

const SelectedOptions = ({ options, removeOption }) => {
  return (
    <div
      style={{
        marginBottom: "20px",
        padding: "10px"
      }}
    >
      {options.map(option => (
        <Option option={option} key={option.id} removeOption={removeOption} />
      ))}
    </div>
  );
};

export default SelectedOptions;
