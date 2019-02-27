import { uiActionTypes } from "../constants/uiActionTypes";

const defaultState = {
  showLoading: false
}

export function uiReducer(state = defaultState, action) {
  switch (action.type) {
    case uiActionTypes.showLoading:
      return {
        ...state,
        showLoading: true
      };
    case uiActionTypes.dismissLoading:
      return {
        ...state,
        showLoading: false
      }
    default:
      return state;
  }
}