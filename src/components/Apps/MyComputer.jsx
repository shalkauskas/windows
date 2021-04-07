import React from 'react';
import Window from '../Window.jsx';
import myComputer from '../../media/my_computer.png';
export default function MyComputerApp() {
  return (
    <Window
      windowTitle="My Computer"
      icon={myComputer}
      case="MyComputer"
    >
      <article role="tabpanel">
        <p>Access denied: Property of Bill Gates</p>
      </article>
    </Window>
  );
}
