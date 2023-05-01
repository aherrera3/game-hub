import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { CanceledError } from "axios";

interface Genre {
  id: number;
  name: string;
}

interface FetchGenreResponse {
  count: number;
  results: Genre[];
}

const useGenres = () => {
  // storing our game and errors objects
  const [genres, setGenres] = useState<Genre[]>([]);
  const [error, setError] = useState([]);
  const [isLoading, setLoading] = useState(false);

  // sending fecth request to the backend
  useEffect(() => {
    const controller = new AbortController();

    setLoading(true);
    apiClient
      .get<FetchGenreResponse>("/genres", { signal: controller.signal })
      .then((response) => {
        setGenres(response.data.results);
        setLoading(false);
      }) //fetching the genres data
      .catch((error) => {
        if (error instanceof CanceledError) return;
        setError(error.message);
        setLoading(false);
      });

    // cleanup function
    return () => controller.abort();
  }, []);

  return { genres, error, isLoading };
};

export default useGenres;
