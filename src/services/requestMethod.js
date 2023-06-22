import axios from 'axios';
import clientUtils from '../utils/client-utils';

const headers = {
  'Content-Type': 'application/json',
  Authorization: clientUtils.auth,
};

async function requestGet(url) {
  try {
    const response = await axios.get(url, { headers });
    return response.data;
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
}

async function requestPost(url, data) {
  try {
    const response = await axios.post(url, data, { headers });
    return response.data;
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
}

async function requestPut(url, data) {
  try {
    const response = await axios.put(url, data, { headers });
    return response.data;
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
}

async function requestDelete(url) {
    try {
      const response = await axios.delete(url, { headers });
      return response.data;
    } catch (error) {
      console.error('Error:', error);
      throw error;
    }
  }

async function requestPatch(url, data) {
    try {
      const response = await axios.patch(url, data, { headers });
      return response.data;
    } catch (error) {
      console.error('Error:', error);
      throw error;
    }
}



export { requestGet, requestPost, requestPut, requestPatch, requestDelete };