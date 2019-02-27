import { contactActionType } from "../constants/contactActionTypes";

const defaultState = {
}

export function contactReducer(state = defaultState, action) {
  switch (action.type) {
    case contactActionType.setContact:
      return {
        ...state,
        ...action.data
      }
    case contactActionType.updateContact:
      const { firstName, lastName, age, photo } = action.data;
      return {
        ...state,
        firstName: firstName || state.firstName,
        lastName: lastName || state.lastName,
        age: age || state.age,
        photo: photo || state.photo
      };
    case contactActionType.resetContact:
      return defaultState;
    default:
      return state;
  }
}