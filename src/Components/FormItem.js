import React from "react";
import "../CSS/FormItem.css";

const FormItem = (props) => {
  const { item, deleteItem, doneItem, increaseQuantity, decreaseQuantity } =
    props;
  return (
    <div className={item.done ? "item-row done" : "item-row"}>
      {item.text}
      <div className="buttonContainer">
        <button onClick={() => increaseQuantity(item.id)}>+</button>
        {item.quantity}
        <button
          style={{ marginRight: 6 }}
          onClick={() => decreaseQuantity(item.id)}
        >
          -
        </button>

        <button style={{ marginRight: 6 }} onClick={() => deleteItem(item.id)}>
          Delete
        </button>
        <button onClick={() => doneItem(item.id)}>Done</button>
      </div>
    </div>
  );
};

export default FormItem;
