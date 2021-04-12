import React, { useState } from 'react';
import ToDoItem from './ToDoItem';
import { createUseStyles } from 'react-jss';
const useStyles = createUseStyles({
  todoContainer: {
    width: `100%`,
    height: `100%`,
    minWidth: `250px`,
    background: `#f1f5f8`,
    backgroundImage: `radial-gradient(#bfc0c1 7.2%, transparent 0)`,
    backgroundSize: `25px 25px`,
    borderRadius: `20px`,
    boxShadow: `4px 3px 7px 2px #00000040`,
    padding: `1rem`,
    boxSizing: `border-box`,
    '& div': {
      marginBottom: '1rem',
    },
  },
  input: {
    marginRight: '0.5rem',
    width: '50%',
    maxWidth: '300px',
    boxShadow: 'inset 0 0 1px #000000',
  },
  ul: {
    listStyle: 'none',
    paddingInlineStart: 0,
    margin: 0,
  },
});
export default function ToDoList() {
  const classes = useStyles();
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
    <div className={classes.todoContainer}>
      <div>
        <input
          className={classes.input}
          onChange={handleChange}
          type="text"
          value={inputText}
        />
        <button onClick={addItem}>Add</button>
      </div>
      <fieldset>
        <ul className={classes.ul}>
          {items.map((todoItem, index) => (
            <ToDoItem text={todoItem} key={index} id={index} />
          ))}
        </ul>
      </fieldset>
    </div>
  );
}
