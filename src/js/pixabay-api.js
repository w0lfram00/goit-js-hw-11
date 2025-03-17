import axios from 'axios';

const API_KEY = '49376041-e249e8ece49f8c2dec7a331c4';
const BASE_URL = 'https://pixabay.com';
axios.defaults.baseURL = BASE_URL;

export function fetchFromPixabay(query) {
  return axios.get('/api/', {
    params: {
      key: API_KEY,
      q: query,
      image_type: 'photo',
      orientation: 'horizontal',
      safesearch: true,
    },
  });
}
