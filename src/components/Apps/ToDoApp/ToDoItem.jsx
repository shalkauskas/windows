import React, { useState } from 'react';

function ToDoItem(props) {
  const [style, setNewStyle] = useState(null);
  function updateStyle() {
    setNewStyle({ textDecoration: 'line-through' });
  }
  return (
    <li id="liItem" style={style} onClick={updateStyle}>
      <input type="checkbox" id="example1" />
      <label for="example1">Done</label>
      {props.text}
    </li>
  );
}

export default ToDoItem;
