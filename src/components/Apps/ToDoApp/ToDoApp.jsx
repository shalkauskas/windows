import React from 'react';
import Window from '../../Window';
import { reduce, initialState } from './TabReducer';
import { GlobalContext } from '../../../App';
import ToDoList from './ToDoList';
export default function ToDoApp() {
  const [tabName, setTabName] = React.useState('');
  const [state] = React.useContext(GlobalContext);
  const [tabState, tabDispatch] = React.useReducer(
    reduce,
    initialState,
  );
  const tab = tabState.tabs.map((tab, index) => {
    // change tab
    const changeTab = (id) => {
      console.log(tab.edit);
      !tab.edit && tabDispatch({ type: 'Switch', payload: id });
    };
    // rename
    const rename = (id, edit) => {
      tabDispatch({
        type: 'StartRename',
        payload: { id: id, edit: edit },
      });
    };
    // handle name change
    const handleNameChange = (e, index) => {
      const tabs = [...tabState.tabs];
      tabs[index].name = e.target.value;
      setTabName(tabs);
    };
    // submit new tab name
    const saveName = (e, index) => {
      e.preventDefault();
      tabDispatch({
        type: 'SaveRename',
        payload: {
          id: tabName[index].id,
          name: tabName[index].name,
          edit: false,
        },
      });
    };
    return (
      <button
        onDoubleClick={() => rename(tab.id, true)}
        onClick={() => changeTab(tab.id)}
        key={tab.id}
        role="tab"
        aria-selected={
          tab.id === tabState.activeTab ? 'true' : `false`
        }
        aria-controls={tab.name}
      >
        {tab.edit ? (
          <form
            onSubmit={(e) => {
              saveName(e, index);
            }}
          >
            <input
              value={tab.name}
              onChange={(e) => handleNameChange(e, index)}
            ></input>
          </form>
        ) : (
          tab.name
        )}
      </button>
    );
  });
  const tabPanel = tabState.tabs.map((tab) => {
    return (
      <article
        role="tabpanel"
        id={tab.id}
        key={tab.id}
        hidden={tab.id === tabState.activeTab ? false : true}
      >
        {tab.content}
      </article>
    );
  });
  const newTab = () => {
    tabDispatch({
      type: 'NewTab',
      payload: {
        id: tabState.tabs.length + 1,
        name: `Tab ${tabState.tabs.length + 1}`,
        content: <ToDoList />,
      },
    });
  };

  return (
    <Window
      windowTitle="ToDo App"
      case="ToDoApp"
      open={state.ToDoApp.appOpen}
      height={600}
    >
      <div className="todo-heading">
        <h1>To-Do List</h1>
      </div>
      <menu role="tablist" style={{ overflow: 'auto' }}>
        {tab}
        <button
          role="tab"
          aria-selected={false}
          aria-controls="newTab"
          onClick={newTab}
        >
          +
        </button>
      </menu>
      {tabPanel}
    </Window>
  );
}
