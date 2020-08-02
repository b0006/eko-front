import { useState, useCallback } from 'react';

import agent from '../agent';

type Method = keyof typeof agent;

interface IResponse<R> {
  isLoading: boolean;
  data?: R;
  error?: string | Error | null;
}

const useFetchDataApi = <T = object, R = object>(url: string, method: Method): [IResponse<R>, (data?: T) => void] => {
  const [isLoading, setIsLoading] = useState(false);
  const [responseData, setResponseData] = useState<R>();
  const [error, setError] = useState<Error | string | null>();

  const fetchData = useCallback(
    async (data?: T) => {
      setIsLoading(true);
      setError(null);

      try {
        const response = await agent[method]<T, R>(url, data);
        if (response.status !== 200) {
          throw new Error(response.statusText || 'Unknown error');
        }
        setResponseData(response.data);
      } catch (err) {
        setError(err);
      } finally {
        setIsLoading(false);
      }
    },
    [method, url]
  );

  return [{ isLoading, data: responseData, error }, fetchData];
};

export default useFetchDataApi;
