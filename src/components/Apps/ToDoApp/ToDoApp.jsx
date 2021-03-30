import React from 'react';
import Window from '../../Window';
import ToDoList from './ToDoList';
import { GlobalContext } from '../../../App';
export default function ToDoApp(props) {
  const [state] = React.useContext(GlobalContext);
  return (
    <div
      style={{ display: state.ToDoApp.appOpen ? 'block' : 'none' }}
    >
      <Window windowTitle="ToDo App" case="ToDoApp">
        <ToDoList />
      </Window>
    </div>
  );
}
