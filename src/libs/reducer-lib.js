import { useReducer } from 'react';
import { APP_ACTIONS } from './reducerAction-lib';
import { DEFAULT_PLAYER_STATE, DEFAULT_FILTER_STATE } from './constants';

const appDefaultState = {
  video: {},
  controls: DEFAULT_PLAYER_STATE,
  filters: DEFAULT_FILTER_STATE,
};

function appReducer(state, action) {
  switch (action.type) {
    case APP_ACTIONS.SET_VIDEO:
      return { ...state, video: action.data };
    case APP_ACTIONS.SET_CONTROLS_STATE:
      return { ...state, controls: action.data };
    case APP_ACTIONS.SET_VIDEOFILTERS_STATE:
      return { ...state, filters: action.data };
    default:
      throw new Error();
  }
}

export function useAppReducer() {
  return useReducer(appReducer, appDefaultState);
}

export default { useAppReducer };
