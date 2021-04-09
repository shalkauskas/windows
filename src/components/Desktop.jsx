import React from 'react';
import AppItem from './AppItem.jsx';
import myComputer from '../media/my_computer.png';
import internetExplorer from '../media/internet_explorer.png';
import ToDoIcon from '../media/todoapp.png';
import weatherIcon from '../media/weather-icon.png';
import paint from '../media/paint.png';
import notepad from '../media/notepad.png';
export default function Desktop() {
  return (
    <div style={{ position: 'absolute' }}>
      <AppItem
        icon={myComputer}
        name="My computer"
        app="MyComputer"
      />
      <AppItem
        icon={internetExplorer}
        name="Internet explorer"
        app="InternetExplorer"
      />
      <AppItem icon={ToDoIcon} name="Task Manager" app="ToDoApp" />
      <AppItem icon={weatherIcon} name="Weather" app="Weather" />
      <AppItem icon={paint} name="Paint" app="Paint" />
      <AppItem icon={notepad} name="Notepad" app="Notepad" />
    </div>
  );
}
