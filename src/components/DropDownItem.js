import React from "react";

const DropDownItem = ({ item: { id, text }, removeDropDowItem }) => {
  const style = {
    backgroundColor: "rgba(0,255,0,0.2)",
    padding: "10px",
    borderRadius: "20px",
    textTransform: "capitalize",
    margin: "8px 10px",
    cursor: "pointer"
  };
  return (
    <span style={style} onClick={() => removeDropDowItem(id)}>
      {text}
    </span>
  );
};

export default DropDownItem;
