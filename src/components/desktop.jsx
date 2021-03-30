import React from 'react';
import AppItem from './AppItem.jsx';
import myComputer from '../media/my_computer.png';
import internetExplorer from '../media/internet_explorer.png';
import ToDoIcon from '../media/bin.png';
import weatherIcon from '../media/weather-icon.png';
import MyComputerApp from './Apps/MyComputer.jsx';
import InternetExplorerApp from './Apps/InternetExplorer/InternetExplorer.jsx';
import ToDoApp from './Apps/ToDoApp/ToDoApp.jsx';
import WeatherApp from './Apps/Weather/WeatherApp.jsx';
export default function Desktop() {
  return (
    <div>
      <AppItem icon={myComputer} name="My computer" case="MyComputer">
        <MyComputerApp />
      </AppItem>

      <AppItem
        icon={internetExplorer}
        name="Internet explorer"
        case="InternetExplorer"
      >
        <InternetExplorerApp />
      </AppItem>
      <AppItem icon={ToDoIcon} name="ToDo List" case="ToDoApp">
        <ToDoApp />
      </AppItem>
      <AppItem icon={weatherIcon} name="Weather" case="Weather">
        <WeatherApp />
      </AppItem>
    </div>
  );
}
