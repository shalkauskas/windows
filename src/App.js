import React, { createContext } from 'react';
import './App.css';
import Desktop from './components/Desktop';
import Footer from './components/Footer/Footer';
export const GlobalContext = createContext();
export default function App() {
  const reduce = (state, action) => {
    switch (action.type) {
      case 'MyComputer':
        return {
          ...state,
          MyComputer: {
            appOpen: action.payload,
            error: '',
          },
        };
      case 'InternetExplorer':
        return {
          ...state,
          InternetExplorer: {
            appOpen: action.payload,
            error: '',
          },
        };
      case 'ToDoApp':
        return {
          ...state,
          ToDoApp: {
            appOpen: action.payload,
            error: '',
          },
        };
      case 'Weather':
        return {
          ...state,
          Weather: {
            ...state.Weather,
            appOpen: action.payload,
          },
        };
      case 'WeatherResult':
        return {
          ...state,
          Weather: {
            appOpen: true,
            error: action.payload.error || '',
            result: action.payload.result || {},
          },
        };
      default:
        return state;
    }
  };
  const initialState = {
    MyComputer: {
      appOpen: false,
      error: '',
    },
    InternetExplorer: { appOpen: false, error: '' },
    ToDoApp: { appOpen: false, error: '' },
    Weather: { appOpen: false, error: '', result: {} },
  };

  const [state, dispatch] = React.useReducer(reduce, initialState);
  console.log(state);
  return (
    <div>
      <GlobalContext.Provider value={[state, dispatch]}>
        <Desktop />
        <Footer />
      </GlobalContext.Provider>
    </div>
  );
}
