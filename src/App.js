import React, { createContext } from 'react';
import './App.css';
import Desktop from './components/Desktop';
import MyComputerApp from './components/Apps/MyComputer.jsx';
import InternetExplorerApp from './components/Apps/InternetExplorer/InternetExplorer.jsx';
import ToDoApp from './components/Apps/ToDoApp/ToDoApp.jsx';
import WeatherApp from './components/Apps/Weather/WeatherApp.jsx';
import Paint from './components/Apps/Paint.jsx';
import Footer from './components/Footer/Footer';
import { reduce, initialState } from './GlobalContext';
import WindowsMediaPlayer from './components/Apps/WindowsMediaPlayer';
export const GlobalContext = createContext();
export default function App() {
  const [state, dispatch] = React.useReducer(reduce, initialState);
  console.log(state);
  return (
    <div id="app">
      <GlobalContext.Provider value={[state, dispatch]}>
        <Desktop />
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: 'inherit',
          }}
        >
          {state.MyComputer.appOpen && <MyComputerApp />}

          {state.InternetExplorer.appOpen && <InternetExplorerApp />}
          {state.ToDoApp.appOpen && <ToDoApp />}
          {state.Weather.appOpen && <WeatherApp />}
          {state.Paint.appOpen && <Paint />}
          {state.WindowsMediaPlayer.appOpen && <WindowsMediaPlayer />}
        </div>

        <Footer />
      </GlobalContext.Provider>
    </div>
  );
}
