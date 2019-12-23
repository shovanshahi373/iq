import React, { useState, useRef } from "react";
import TextField from "@material-ui/core/TextField";
import { withStyles } from "@material-ui/core/styles";
import DropDown from "./Dropdown";
import SelectedOptions from "./SelectedOptions";
import uuidv4 from "uuid/v4";

const styles = {
  card: {
    width: 700,
    padding: 10
  },
  input: {
    width: "95%"
  }
};

const Input = ({ classes }) => {
  const dropitems = [
    {
      id: 1,
      text: "default text one"
    },
    {
      id: 2,
      text: "longer default text one"
    },
    {
      id: 3,
      text: "very very long default text one"
    }
  ];
  const [dropDownItems, setDropDownItems] = useState(dropitems);
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [currentVal, setCurrentVal] = useState("");

  const targetNode = useRef();
  const intersectionNode = useRef();

  const removeOption = id => {
    const filteredOptions = selectedOptions.filter(option => option.id !== id);
    setSelectedOptions([...filteredOptions]);
  };

  const removeDropDowItem = id => {
    const newfilter = dropDownItems.filter(item => item.id !== id);
    const removedItem = dropDownItems.filter(item => item.id === id);
    setDropDownItems(newfilter);
    setSelectedOptions([...selectedOptions, ...removedItem]);
  };

  const updateSelectedOptions = e => {
    console.log("i run");
    setSelectedOptions([
      ...selectedOptions,
      { text: currentVal, id: uuidv4() }
    ]);
    setCurrentVal("");
  };

  const genericIconStyles = {
    fontSize: 20,
    color: "#ccc"
  };
  const icon = currentVal
    ? { ...genericIconStyles, display: "inline" }
    : { ...genericIconStyles, display: "none" };

  return (
    <div
      ref={intersectionNode}
      style={{
        width: 600,
        padding: "10px 0"
      }}
    >
      <div
        style={{
          borderRadius: "5px",
          border: "2px solid #ccc",
          marginBottom: "3px"
        }}
      >
        {selectedOptions.length ? (
          <SelectedOptions
            options={selectedOptions}
            removeOption={removeOption}
          />
        ) : null}
        <div
          style={{
            display: "flex"
          }}
        >
          <TextField
            className={classes.input}
            value={currentVal}
            onChange={e => setCurrentVal(e.target.value)}
            onKeyPress={e =>
              e.key === "Enter" && currentVal ? updateSelectedOptions(e) : null
            }
            onFocus={e => (targetNode.current.style.display = "flex")}
          />
          {currentVal ? (
            <span>
              <i
                className='fas fa-check-circle'
                style={icon}
                onClick={e => updateSelectedOptions(e)}
              ></i>
            </span>
          ) : null}
          {currentVal ? (
            <span>
              <i
                className='fas fa-times-circle'
                style={icon}
                onClick={e => setCurrentVal("")}
              ></i>
            </span>
          ) : (
            <span>
              <i className='fas fa-chevron-down'></i>
            </span>
          )}
        </div>
      </div>

      <div
        style={{
          border: "2px solid #ccc",
          borderRadius: "5px",
          padding: "20px",
          display: "none",
          flexWrap: "wrap"
        }}
        ref={targetNode}
      >
        <DropDown items={dropDownItems} removeDropDowItem={removeDropDowItem} />
      </div>
    </div>
  );
};

export default withStyles(styles)(Input);
