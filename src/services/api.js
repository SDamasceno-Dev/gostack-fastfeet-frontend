import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3028',
});

export default api;
