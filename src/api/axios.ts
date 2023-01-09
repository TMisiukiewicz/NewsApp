import axios from 'axios';
import {API_KEY} from '@env';

const api = axios.create({
  baseURL: 'https://api.nytimes.com/svc',
});

api.interceptors.request.use(config => {
  config.params = {
    ...config.params,
    'api-key': API_KEY,
  };

  return config;
});

export default api;
