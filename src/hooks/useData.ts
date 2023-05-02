import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { AxiosRequestConfig, CanceledError } from "axios";

interface FetchResponse<T> {
  count: number;
  results: T[];
}

//deps are the dependencies
const useData = <T>(
  endpoint: string,
  requestConfig?: AxiosRequestConfig,
  deps?: any[]
) => {
  // storing our game and errors objects
  const [data, setData] = useState<T[]>([]);
  const [error, setError] = useState([]);
  const [isLoading, setLoading] = useState(false);

  // sending fecth request to the backend
  useEffect(
    () => {
      const controller = new AbortController();

      setLoading(true);
      apiClient
        .get<FetchResponse<T>>(endpoint, {
          signal: controller.signal,
          ...requestConfig,
        })
        .then((response) => {
          setData(response.data.results);
          setLoading(false);
        }) //fetching the genres data
        .catch((error) => {
          if (error instanceof CanceledError) return;
          setError(error.message);
          setLoading(false);
        });

      // cleanup function
      return () => controller.abort();
    },
    deps ? [...deps] : [] //dependencies
  );

  return { data, error, isLoading };
};

export default useData;
