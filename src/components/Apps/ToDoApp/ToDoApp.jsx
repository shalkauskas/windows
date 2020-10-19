import React, { useState } from 'react';
import ToDoIcon from '../../../media/bin.png';
import Window from '../../Window';
import ToDoList from './ToDoList';

function ToDoApp(props) {
  // Open & close ToDoApp window
  const [showWindow, setShowWindow] = useState('none');

  const handleCloseWindow = () => setShowWindow('none');
  const handleShowWindow = () => setShowWindow('block');
  return (
    <div>
      <div className="iconApp">
        <img
          onClick={handleShowWindow}
          className="icon"
          src={ToDoIcon}
          alt=""
        />
        <span style={{ fontFamily: 'Pixelated MS Sans Serif' }}>
          ToDo App
        </span>
      </div>
      <Window
        showWindow={showWindow}
        onHideWindow={handleCloseWindow}
        windowTitle="ToDo App"
        windowContent={<ToDoList />}
      />
    </div>
  );
}
export default ToDoApp;
