import { apiRequest } from "./apiThunk";

export const ContactApi = {
  getContacts() {
    return apiRequest({
      method: 'GET',
      url: 'contact',
    })
  },

  getContactDetail(id) {
    return apiRequest({
      method: 'GET',
      url: `contact/${id}`,
    })
  },

  addContact({ firstName, lastName, age, photo }) {
    const payload = {
      firstName, lastName, age
    };

    if (photo) {
      payload.photo = photo;
    }

    return apiRequest({
      method: 'POST',
      url: 'contact',
      payload
    })
  },

  deleteContact(id) {
    return apiRequest({
      method: 'DELETE',
      url: `contact/${id}`
    })
  },

  editContact({ id, firstName, lastName, age, photo }) {
    const payload = {
      firstName, lastName, age
    };

    if (photo) {
      payload.photo = photo;
    }

    return apiRequest({
      method: 'PUT',
      url: `contact/${id}`,
      payload
    })
  }
}