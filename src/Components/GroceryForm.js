import React, { useState } from "react";
import "../CSS/GroceryForm.css";

const GroceryForm = (props) => {
  const [input, setInput] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    props.addItem(input);
    setInput("");
  };

  return (
    <form onSubmit={onSubmit} className="grocery-form">
      <input
        style={{ margin: 10 }}
        value={input}
        onChange={(e) => setInput(e.target.value)}
        className="grocery-input "
        placeholder="Add an Item"
      />

      <button style={{ margin: 10 }} type="submit" className="grocery-button">
        Add
      </button>
    </form>
  );
};

export default GroceryForm;
