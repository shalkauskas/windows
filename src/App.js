import React, { createContext } from 'react';
import './App.css';
import Desktop from './components/Desktop.jsx';
import MyComputerApp from './components/Apps/MyComputer.jsx';
import InternetExplorerApp from './components/Apps/InternetExplorer/InternetExplorer.jsx';
import ToDoApp from './components/Apps/ToDoApp/ToDoApp.jsx';
import WeatherApp from './components/Apps/Weather/WeatherApp.jsx';
import Paint from './components/Apps/Paint.jsx';
import Footer from './components/Footer/Footer';
import { reduce, initialState } from './GlobalContext';
import WindowsMediaPlayer from './components/Apps/WindowsMediaPlayer';
import Notepad from './components/Apps/Notepad';
import CommandLine from './components/CommandLine';
import 'xp.css/dist/XP.css';
import { createUseStyles } from 'react-jss';
import background from './media/xp-background.jpg';
import Error from './components/Error';
const useStyles = createUseStyles({
  app: {
    backgroundImage: `url("${background}")`,
    backgroundRepeat: `no-repeat`,
    backgroundSize: `cover`,
    fontFamily: `Tahoma, 'Noto Sans', sans-serif`,
    overflow: `hidden`,
  },
});
export const GlobalContext = createContext();
export default function App() {
  const classes = useStyles();
  const [state, dispatch] = React.useReducer(reduce, initialState);
  // console.log(state);
  return (
    <GlobalContext.Provider value={[state, dispatch]}>
      <div id="app" className={classes.app}>
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
          {state.Notepad.appOpen && <Notepad />}
          {state.CommandLine.appOpen && <CommandLine />}
          {state.Error.appOpen && <Error />}
        </div>

        <Footer />
      </div>
    </GlobalContext.Provider>
  );
}
