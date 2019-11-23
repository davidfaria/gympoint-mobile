import axios from 'axios';

const api = axios.create({
  // baseURL: 'http://localhost:4444',
  baseURL: 'http://api.gympoint.larawork.com.br',
});

export default api;
