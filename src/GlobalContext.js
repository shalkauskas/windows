export const initialState = {
  MyComputer: {
    appOpen: false,
  },
  Notepad: {
    appOpen: false,
  },
  InternetExplorer: {
    appOpen: false,

    results: [],
    query: ``,
    pagination: {},
    submitted: false,
  },
  ToDoApp: { appOpen: false },
  Weather: {
    appOpen: false,

    result: {},
    submitted: false,
    units: `imperial`,
  },
  Paint: { appOpen: false },
  WindowsMediaPlayer: { appOpen: false },
  CommandLine: { appOpen: false },
  ActiveApp: ``,
  StatusBar: [],
  StartMenu: { open: false },
  Error: { appOpen: false, error: `Application not found` },
};

export const reduce = (state, action) => {
  switch (action.type) {
    case 'MyComputer':
      return {
        ...state,
        MyComputer: {
          ...state.MyComputer,
          appOpen: action.payload,
        },
      };
    case 'InternetExplorer':
      return {
        ...state,
        InternetExplorer: {
          ...state.InternetExplorer,
          appOpen: action.payload,
        },
      };
    case 'InternetExplorerResults':
      return {
        ...state,
        InternetExplorer: {
          ...state.InternetExplorer,
          results: action.payload.gifs,
          query: action.payload.query,
          pagination: action.payload.pagination,
          submitted: action.payload.submitted,
        },
      };
    case 'InternetExplorerReset':
      return {
        ...state,
        InternetExplorer: {
          ...initialState.InternetExplorer,
          appOpen: true,
        },
      };
    case 'ToDoApp':
      return {
        ...state,
        ToDoApp: {
          ...state.ToDoApp,
          appOpen: action.payload,
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
          ...state.Weather,
          appOpen: true,
          submitted: action.payload.submitted,
          result: action.payload.result,
          units: action.payload.units,
        },
      };
    case 'Paint':
      return {
        ...state,
        Paint: {
          ...state.Paint,
          appOpen: action.payload,
        },
      };
    case 'Notepad':
      return {
        ...state,
        Notepad: {
          ...state.Notepad,
          appOpen: action.payload,
        },
      };
    case 'ActiveApp':
      return {
        ...state,
        ActiveApp: action.payload,
      };
    case 'StatusBarAdd':
      const StatusBarAdd = state.StatusBar.filter(
        (item) => item !== action.payload,
      );
      return {
        ...state,
        StatusBar: [...StatusBarAdd, action.payload],
      };
    case 'StatusBarRemove':
      const StatusBarRemove = state.StatusBar.filter(
        (item) => item !== action.payload,
      );
      return {
        ...state,
        StatusBar: [...StatusBarRemove],
      };
    case 'WindowsMediaPlayer':
      return {
        ...state,
        WindowsMediaPlayer: {
          ...state.WindowsMediaPlayer,
          appOpen: action.payload,
        },
      };
    case 'CommandLine':
      return {
        ...state,
        CommandLine: {
          ...state.CommandLine,
          appOpen: action.payload,
        },
      };
    case 'StartMenu':
      return {
        ...state,
        StartMenu: { open: action.payload },
      };
    case 'Error':
      return {
        ...state,
        Error: {
          ...state.Error,
          appOpen: action.payload,
        },
      };
    case 'ErrorCustom':
      return {
        ...state,
        Error: {
          error: action.payload.error,
          appOpen: action.payload.appOpen,
        },
      };
    default:
      return state;
  }
};
