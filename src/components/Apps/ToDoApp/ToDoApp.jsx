import React from 'react';
import Window from '../../Window';
import { reduce, initialState } from './TabReducer';
import ToDoList from './ToDoList';
export default function ToDoApp() {
  const [tabState, tabDispatch] = React.useReducer(
    reduce,
    initialState,
  );
  const [tabName, setTabName] = React.useState(tabState.tabs); //edit mode closes only frist two
  const tab = tabState.tabs.map((tab, index) => {
    // change tab
    const changeTab = (id) => {
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
              style={{ maxWidth: '3rem' }}
              maxLength="20"
              autoFocus
              onBlur={(e) => saveName(e, index)}
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

  const editMode = tabState.tabs.find((item) => {
    return item;
  });
  return (
    <Window
      windowTitle="ToDo App"
      case="ToDoApp"
      height={600}
      statusBar
      statusBarField1={
        editMode.edit
          ? `Press Enter to save`
          : 'Rename a tab on double click'
      }
      statusBarField2={
        editMode.edit
          ? `20 characters tab name limit`
          : `Add new tabs on + button`
      }
      statusBarField3={`Total tabs: ` + tabState.tabs.length}
    >
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
