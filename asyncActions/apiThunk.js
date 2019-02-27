import request from 'superagent';

const BASE_URL = "https://simple-contact-crud.herokuapp.com/";


export function apiRequest(options) {
  return new Promise(async (resolve) => {

    const { method, url, payload = {} } = options;
    const apiUrl = BASE_URL + url;
    let res = {
      isSuccess: false,
      data: null,
    }

    try {
      let req = request(method, apiUrl)
        .ok(res => true)
        .accept("application/json")
        .send(payload);

      const { body, status: statusCode } = await req;
      const isSuccess = statusCode >= 200 && statusCode < 300
      res = {
        ...res,
        isSuccess,
        data: isSuccess ? body : body.message
      }

    } catch (error) {
      res = {
        ...res,
        isSuccess: false,
        data: {
          error: 'Error'
        }
      }
    }

    resolve(res);
  });
}