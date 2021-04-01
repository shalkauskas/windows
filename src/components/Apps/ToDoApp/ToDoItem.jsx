import React, { useState } from 'react';

function ToDoItem(props) {
  const [checked, setChecked] = useState(false);
  function updateStyle() {
    setChecked(!checked);
  }
  return (
    <li id="liItem">
      <input
        type="checkbox"
        id={`item${props.id}`}
        aria-label="Done"
        onChange={updateStyle}
      />
      <label
        htmlFor={`item${props.id}`}
        style={{
          textDecoration: checked ? 'line-through' : '',
          fontSize: 'inherit',
          marginLeft: '1rem',
        }}
      >
        <span style={{ marginLeft: '0.5rem' }}>{props.text}</span>
      </label>
    </li>
  );
}

export default ToDoItem;
