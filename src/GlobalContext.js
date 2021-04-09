export const reduce = (state, action) => {
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
export const initialState = {
  MyComputer: {
    appOpen: false,
    error: '',
  },
  Notepad: {
    appOpen: false,
    error: '',
  },
  InternetExplorer: {
    appOpen: false,
    error: '',
    results: [],
    query: ``,
    pagination: {},
    submitted: false,
  },
  ToDoApp: { appOpen: false, error: '' },
  Weather: {
    appOpen: false,
    error: '',
    result: {},
    submitted: false,
    units: `imperial`,
  },
  Paint: { appOpen: false, error: '' },
  WindowsMediaPlayer: { appOpen: false, error: `` },
  CommandLine: { appOpen: false, error: `` },
  ActiveApp: ``,
  StartMenu: { open: false },
  Error: { appOpen: false, error: `Application not found` },
};
