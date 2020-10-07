import { AxiosResponse } from 'axios';

import axios from './axios';

export type TError = {
  statusCode: number;
  message: string;
} | null;

interface IResponse<R> {
  status: number;
  data?: R;
  error?: TError;
}

const timeout = 60000;

const getErrorData = (err: any) => {
  const errorData: TError =
    err.response && err.response.data ? err.response.data : { statusCode: 400, message: 'Неизвестная ошибка' };
  return {
    status: errorData?.statusCode || 400,
    error: errorData,
  };
};

export default {
  async POST<T = object, R = object>(path: string, data?: T): Promise<IResponse<R>> {
    try {
      const response: AxiosResponse<R> = await axios.post(path, data, { timeout });
      return { status: response.status, data: response.data, error: null };
    } catch (err) {
      return getErrorData(err);
    }
  },

  async GET<T = object, R = object>(path: string, params?: T): Promise<IResponse<R>> {
    try {
      const response: AxiosResponse<R> = await axios.get(path, {
        params,
        timeout,
      });
      return { status: response.status, data: response.data, error: null };
    } catch (err) {
      return getErrorData(err);
    }
  },

  async PUT<T = object, R = object>(path: string, data?: T): Promise<IResponse<R>> {
    try {
      const response: AxiosResponse<R> = await axios.put(path, data, { timeout });
      return { status: response.status, data: response.data, error: null };
    } catch (err) {
      return getErrorData(err);
    }
  },

  async DELETE<T = object, R = object>(path: string, data?: T): Promise<IResponse<R>> {
    try {
      const response: AxiosResponse<R> = await axios.delete(path, { timeout, data });
      return { status: response.status, data: response.data, error: null };
    } catch (err) {
      return getErrorData(err);
    }
  },
};
