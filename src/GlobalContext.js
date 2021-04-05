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
          units: action.payload.units || 'imperial',
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
    case 'StartMenu':
      return {
        ...state,
        StartMenu: { open: action.payload },
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
  InternetExplorer: { appOpen: false, error: '' },
  ToDoApp: { appOpen: false, error: '' },
  Weather: {
    appOpen: false,
    error: '',
    result: {},
    units: `imperial`,
  },
  Paint: { appOpen: false, error: '' },
  WindowsMediaPlayer: { appOpen: false, error: `` },
  ActiveApp: ``,
  StartMenu: { open: false },
};
