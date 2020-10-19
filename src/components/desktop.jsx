import React from 'react';

import InternetExplorerApp from './Apps/InternetExplorer/InternetExplorer.jsx';
import ToDoApp from './Apps/ToDoApp/ToDoApp.jsx';
import WeatherApp from './Apps/Weather/WeatherApp';
import MyComputerApp from './myComputer.jsx';

function Desktop() {
  return (
    <div>
      <MyComputerApp />
      <InternetExplorerApp />
      <ToDoApp />
      <WeatherApp />
    </div>
  );
}

export default Desktop;
