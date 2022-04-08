import { parseCookies, setCookie, destroyCookie } from 'nookies';
/**
 * Parses the JSON returned by a network request
 *
 * @param  {object} response A response from a network request
 *
 * @return {object}          The parsed JSON from the request
 */
function parseJSON(response) {
  if (response.status === 204 || response.status === 205) {
    return null;
  }
  return response.json();
}

function checkStatus(response) {
  if (response.status >= 200 && response.status < 300) {
    return response;
  }
  const error = new Error(response.statusText);
  error.response = response;
  throw error;
}
export default function request(url, options) {
  return fetch(url, options).then(parseJSON);
}

export function requestAll(url, options) {
  let newOptions = options;
  const cookies = parseCookies();
  // check has options
  if (!newOptions) {
    newOptions = {
      headers: {
        platform: 'web',
        device_id: cookies.deviceId
      }
    };
    // check cookies has accessToken
    if (!cookies.accessToken === false) {
      newOptions.headers.token = cookies.accessToken;
    }
    // check headers has deviceId
    if (!newOptions.headers.device_id) {
      // check cookies has accessToken
      if (!cookies.deviceId === false) {
        newOptions.headers.device_id = cookies.deviceId;
      }
    }
  } else {
    // check options has headers
    if (newOptions.headers) {
      newOptions.headers.platform = 'web';
      // newOptions.headers.device_id = cookies.deviceId;
      // check headers has token
      if (!newOptions.headers.token) {
        // check cookies has accessToken
        if (!cookies.accessToken === false) {
          newOptions.headers.token = cookies.accessToken;
        }
      }
      // check headers has deviceId
      if (!newOptions.headers.device_id) {
        // check cookies has accessToken
        if (!cookies.deviceId === false) {
          newOptions.headers.device_id = cookies.deviceId;
        }
      }
    } else {
      newOptions.headers = {
        platform: 'web',
      };
      // check headers has token
      if (!newOptions.headers.token) {
        // check cookies has accessToken
        if (!cookies.accessToken === false) {
          newOptions.headers.token = cookies.accessToken;
        }
      }
      // check headers has deviceId
      if (!newOptions.headers.device_id) {
        // check cookies has accessToken
        if (!cookies.deviceId === false) {
          newOptions.headers.device_id = cookies.deviceId;
        }
      }
    }
  }
  return fetch(url, newOptions).then(parseJSON);
}
