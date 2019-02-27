import { contactActionType } from "../constants/contactActionTypes";

export function setContact(contact) {
  return {
    type: contactActionType.setContact,
    data: contact
  }
}

export function updateContact(contact) {
  return {
    type: contactActionType.updateContact,
    data: contact
  }
}

export function resetContact() {
  return {
    type: contactActionType.resetContact,
  }
}

export function notifyUpdate() {
  return {
    type: contactActionType.notifyUpdate
  }
}

export function updateHandled() {
  return {
    type: contactActionType.updateHandled
  }
}