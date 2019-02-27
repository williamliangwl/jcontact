import { uiActionTypes } from "../constants/uiActionTypes";

export function showLoading() {
  return {
    type: uiActionTypes.showLoading
  }
}

export function dismissLoading() {
  return {
    type: uiActionTypes.dismissLoading
  }
}