import React, { useState } from 'react';
import ToDoItem from './ToDoItem';
import './ToDoList.css';
function ToDoList(props) {
  const [inputText, setInputText] = useState('');
  const [items, setItems] = useState([]);

  function handleChange(event) {
    const newValue = event.target.value;
    setInputText(newValue);
  }

  function addItem() {
    setItems((prevItems) => {
      return [...prevItems, inputText];
    });
    setInputText('');
  }

  return (
    <div className="todo-container">
      <div className="todo-heading">
        <h1>To-Do List</h1>
      </div>
      <div className="todo-form">
        <input
          onChange={handleChange}
          type="text"
          id="input"
          value={inputText}
        />
        <button id="button" onClick={addItem}>
          <span id="span">Add</span>
        </button>
      </div>
      <div>
        <ul>
          {items.map((todoItem) => (
            <ToDoItem text={todoItem} />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default ToDoList;
