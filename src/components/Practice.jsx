import React, { useState } from "react";

function App() {
  const [item, setItem] = useState("");

  const [values, setValue] = useState([]);

  function handleClick() {
    setValue((preValue) => {
      return [...preValue, item];
    });
  }

  function update(event) {
    var value = event.target.value;
    setItem(value);
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input type="text" onChange={update} />
        <button onClick={handleClick}>
          <span>Add</span>
        </button>
      </div>
      <div>
        {/* <p>{item}</p> */}
        <ul>
          {values.map((todo) => (
            <li>{todo}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
