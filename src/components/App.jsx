import React, { useState } from "react";

export default function App() {
  const [item, setItem] = useState("");

  const [value, setValue] = useState([]);

  function handleClick() {
    setValue((preValue) => {
      return [...preValue, item];
    });
  }

  function handleChange(event) {
    const newValue = event.target.value;
    setItem(newValue);
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input type="text" onChange={handleChange} />
        <button onClick={handleClick}>
          <span>Add</span>
        </button>
      </div>
      <div>
        {/* <p>{item}</p> */}
        <ul>
          {value.map((todoItem) => (
            <li>{todoItem}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
