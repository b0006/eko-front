import { useState, useCallback } from 'react';

import agent, { TError } from '../agent';

type Method = keyof typeof agent;

interface IResponse<R> {
  isLoading: boolean;
  data?: R;
  error?: TError;
}

const useFetchDataApi = <T = object, R = object>(
  url: string,
  method: Method = 'GET'
): [IResponse<R>, (data?: T) => void] => {
  const [isLoading, setIsLoading] = useState(false);
  const [responseData, setResponseData] = useState<R>();
  const [error, setError] = useState<TError>();

  const fetchData = useCallback(
    async (data?: T) => {
      setIsLoading(true);
      setError(null);

      try {
        const response = await agent[method]<T, R>(url, data);
        setResponseData(response.data);
      } catch (err) {
        if (err.response && err.response.data) {
          return setError(err.response.data);
        }
        setError({ statusCode: 400, message: 'Неизвестная ошибка' });
      } finally {
        setIsLoading(false);
      }
    },
    [method, url]
  );

  return [{ isLoading, data: responseData, error }, fetchData];
};

export default useFetchDataApi;
