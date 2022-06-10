const axios = require('axios').default;

const { API_BASE_URL = 'http://localhost:5000' } = process.env;

export async function readPosts() {
  try {
    const response = await axios.get(`${API_BASE_URL}/posts`);
    const payload = await response.json();
    if (payload.error) {
      return Promise.reject(payload.error);
    }
    return payload.data;
  } catch (error) {
    return Promise.resolve([]);
  }
}

export async function registerUser() {}

export async function loginUser() {}
