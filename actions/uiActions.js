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

export function showErrorAlert(error) {
  return {
    type: uiActionTypes.showErrorAlert,
    error
  }
}

export function toastDisplayed() {
  return {
    type: uiActionTypes.toastDisplayed,
  }
}