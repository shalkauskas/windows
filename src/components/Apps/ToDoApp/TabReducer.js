import ToDoList from './ToDoList';
export const initialState = {
  tabs: [
    { id: 1, name: 'Tab 1', content: <ToDoList />, edit: false },
    { id: 2, name: 'Tab 2', content: <ToDoList />, edit: false },
  ],
  activeTab: 1,
};
export const reduce = (state, action) => {
  console.log(state);
  switch (action.type) {
    case 'Switch':
      const stopEdit = state.tabs.map((tab) => ({
        ...tab,
        edit: false,
      }));
      return {
        tabs: [...stopEdit],
        activeTab: action.payload,
      };
    case 'NewTab':
      const stopEdit2 = state.tabs.map((tab) => ({
        ...tab,
        edit: false,
      }));
      return {
        activeTab: action.payload.id,
        tabs: [...stopEdit2, action.payload],
      };
    case 'StartRename':
      const findTab = state.tabs.find(
        (tab) => action.payload.id === tab.id,
      );
      const restTabs = state.tabs.filter(
        (tab) => action.payload.id !== tab.id,
      );
      return {
        ...state,
        tabs: [
          { ...findTab, edit: action.payload.edit },
          ...restTabs,
        ],
      };
    case 'SaveRename':
      const findEditTab = state.tabs.find(
        (tab) => action.payload.id === tab.id,
      );
      const restOfTabs = state.tabs.filter(
        (tab) => action.payload.id !== tab.id,
      );
      return {
        ...state,
        tabs: [
          {
            ...findEditTab,
            name: action.payload.name,
            edit: action.payload.edit,
          },
          ...restOfTabs,
        ],
      };
    default:
      return state;
  }
};
