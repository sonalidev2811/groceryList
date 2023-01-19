import React, { useState } from "react";
import GroceryForm from "./Components/GroceryForm";
import FormItem from "./Components/FormItem";
import "./CSS/App.css";

const App = () => {
  const [items, setItems] = useState([]);
  //setItems([]);
  const addItem = (text) => {
    if (!text) {
      alert("Please enter an item");
    }
    //debugger;
    let id = items.length;
    let item = { id: id, text: text, quantity: 1, done: false };
    let newItems = [...items, item];
    console.log(newItems);
    setItems(newItems);
  };

  const deleteItem = (id) => {
    let updatedItems = [...items].filter((item) => item.id !== id);
    // console.log(updatedItem);
    setItems(updatedItems);
  };

  const doneItem = (id) => {
    //console.log(id);
    let updatedItems = items.map((item) => {
      if (item.id === id) {
        item.done = !item.done;
      }
      return item;
    });
    setItems(updatedItems);
  };

  const increaseQuantity = (index) => {
    // debugger;
    const updatedItems = [...items];
    //console.log("Amrendra", updatedItems);
    updatedItems[index].quantity++;
    console.log(updatedItems);
    setItems(updatedItems);
  };

  const decreaseQuantity = (quantity) => {
    const newItems = [...items];

    newItems[quantity].quantity--;

    console.log(newItems);
    setItems(newItems);
  };

  return (
    <div className="grocery-app">
      <div className="grocery-container">
        <h1>Grocery List</h1>
        <GroceryForm addItem={addItem} />
        {items.map((item) => {
          return (
            <FormItem
              increaseQuantity={increaseQuantity}
              decreaseQuantity={decreaseQuantity}
              doneItem={doneItem}
              deleteItem={deleteItem}
              item={item}
              key={item.id}
            />
          );
        })}
        <div className="total-count">Total:{items.length}</div>
      </div>
    </div>
  );
};

export default App;
