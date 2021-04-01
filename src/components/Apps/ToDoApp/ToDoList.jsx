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
      <div style={{ marginBottom: '1rem' }}>
        <input
          style={{
            marginRight: '0.5rem',
            width: '50%',
            maxWidth: '300px',
            boxShadow: 'inset 0 0 1px #000000',
          }}
          onChange={handleChange}
          type="text"
          // id="input"
          value={inputText}
        />
        <button
          // id="button"
          onClick={addItem}
        >
          Add
          {/* <span id="span"></span> */}
        </button>
      </div>
      <fieldset>
        <ul
          style={{
            listStyle: 'none',
            paddingInlineStart: 0,
            margin: 0,
          }}
        >
          {items.map((todoItem, index) => (
            <ToDoItem text={todoItem} key={index} id={index} />
          ))}
        </ul>
      </fieldset>
    </div>
  );
}

export default ToDoList;
