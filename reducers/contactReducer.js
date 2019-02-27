import { contactActionType } from "../constants/contactActionTypes";

const defaultState = {
  contact: {},
  hasUpdate: false,
}

export function contactReducer(state = defaultState, action) {
  switch (action.type) {
    case contactActionType.setContact:
      return {
        ...state,
        contact: action.data
      }
    case contactActionType.updateContact:
      const { firstName, lastName, age, photo } = action.data;
      return {
        ...state,
        contact: {
          ...state.contact,
          firstName: firstName || state.contact.firstName,
          lastName: lastName || state.contact.lastName,
          age: age || state.contact.age,
          photo: photo || state.contact.photo,
        },
        hasUpdate: true
      };
    case contactActionType.notifyUpdate:
      return {
        ...state,
        hasUpdate: true
      }
    case contactActionType.updateHandled:
      return {
        ...state,
        hasUpdate: false
      }
    case contactActionType.resetContact:
      return {
        ...state,
        contact: {}
      };
    default:
      return state;
  }
}