import {BASE_URL} from 'react-native-dotenv';
import axios from 'axios';

const api = axios.create({
  baseURL: BASE_URL,
});

export default api;
