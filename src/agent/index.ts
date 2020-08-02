import { AxiosResponse } from 'axios';

import axios from './axios';

const timeout = 60000;

export default {
  async POST<T = object, R = object>(path: string, data?: T) {
    const response: AxiosResponse<R> = await axios.post(path, data, { timeout });
    return { status: response.status, data: response.data, statusText: response.statusText };
  },

  async GET<T = object, R = object>(path: string, params?: T) {
    const response: AxiosResponse<R> = await axios.get(path, {
      params,
      timeout,
    });
    return { status: response.status, data: response.data, statusText: response.statusText };
  },
};
