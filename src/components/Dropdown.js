import React from "react";
import DropDownItem from "./DropDownItem";

const Dropdown = ({ items, removeDropDowItem }) => {
  // const inputRef = useRef();
  return items.map(item => (
    <DropDownItem
      item={item}
      key={item.id}
      removeDropDowItem={removeDropDowItem}
    />
  ));
};

export default Dropdown;
