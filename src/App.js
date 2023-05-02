import "./styles.css";
import React, { useState } from "react";

function TextField(props) {
  const [text, setText] = useState("");
  const [list, setList] = useState([]);
  const [selectedItem, setSelectedItem] = useState(null);

  function handleSubmit(event) {
    event.preventDefault();
    setList([...list, text]);
    setText("");
  }

  function handleChange(event) {
    setText(event.target.value);
  }

  function handleItemClick(index) {
    if (selectedItem === index) {
      setSelectedItem(null);
    } else {
      setSelectedItem(index);
    }
  }

  function handleClearClick() {
    setList([]);
  }

  function handleDeleteClick(index) {
    setList(list.filter((_, i) => i !== index));
    setSelectedItem(null);
  }

  function handleEditClick(index) {
    setText(list[index]);
    setList(list.filter((_, i) => i !== index));
    setSelectedItem(null);
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Add Task:
        <input type="text" value={text} onChange={handleChange} />
      </label>
      <button type="submit">Submit</button>
      <button className="button " type="button" onClick={handleClearClick}>
        Clear List
      </button>
      <ul className="List">
        {list.map((item, index) => (
          <li key={index} onClick={() => handleItemClick(index)}>
            {item}
            {selectedItem === index && (
              <div>
                <button type="button" onClick={() => handleEditClick(index)}>
                  Edit
                </button>
                <button type="button" onClick={() => handleDeleteClick(index)}>
                  Delete
                </button>
              </div>
            )}
          </li>
        ))}
      </ul>
    </form>
  );
}

export default function App() {
  return (
    <div className="container">
      <h1>To Do List</h1>
      <TextField />
    </div>
  );
}
