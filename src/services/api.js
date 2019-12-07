import {RN_BASE_URL} from 'react-native-dotenv';
import axios from 'axios';

const api = axios.create({
  baseURL: RN_BASE_URL,
});

export default api;
