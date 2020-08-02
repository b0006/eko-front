import axios from 'axios';

import { userStore } from '../mobx';

const HTTP = axios.create({
  baseURL: 'http://localhost:5000',
});

HTTP.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    const status = error.response ? error.response.status : 408;
    if (status >= 500) {
      window.console.error(error.toString());
    }
    if (status === 401) {
      userStore.logout();
      window.console.log('logout');
    }
    return Promise.reject(error);
  }
);

export default HTTP;
