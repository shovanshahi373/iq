import React from "react";

const Option = ({ option: { id, text }, removeOption }) => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "flex-start",
        alignItems: "flex-start"
      }}
    >
      <p
        style={{
          margin: "0px 0px 5px 0px",
          border: "2px solid green",
          borderRadius: "25px",
          display: "inline",
          padding: "5px",
          cursor: "pointer"
        }}
      >
        {text}
        <i
          className='fas fa-times-circle'
          style={{
            borderRadius: "50%",
            marginLeft: "20px",
            fontSize: "20px"
          }}
          onClick={() => removeOption(id)}
        ></i>
      </p>
    </div>
  );
};

export default Option;
