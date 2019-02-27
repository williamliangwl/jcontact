import { uiActionTypes } from "../constants/uiActionTypes";

const defaultState = {
  showLoading: false,
  error: ''
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
      };
    case uiActionTypes.showErrorAlert:
      return {
        ...state,
        error: action.error
      };
    case uiActionTypes.toastDisplayed:
      return {
        ...state,
        error: ''
      };
    default:
      return state;
  }
}