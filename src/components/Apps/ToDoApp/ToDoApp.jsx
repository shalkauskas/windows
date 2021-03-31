import React from 'react';
import Window from '../../Window';
import ToDoList from './ToDoList';
import { GlobalContext } from '../../../App';
export default function ToDoApp(props) {
  const [state] = React.useContext(GlobalContext);
  return (
    <Window
      windowTitle="ToDo App"
      case="ToDoApp"
      open={state.ToDoApp.appOpen}
      height={600}
    >
      <ToDoList />
    </Window>
  );
}
