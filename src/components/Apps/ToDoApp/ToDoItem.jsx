import React, { useState } from 'react';

function ToDoItem(props) {
  const [style, setNewStyle] = useState(null);
  function updateStyle() {
    setNewStyle({ textDecoration: 'line-through' });
  }
  return (
    <li id="liItem" style={style} onClick={updateStyle}>
      {props.text}
    </li>
  );
}

export default ToDoItem;
