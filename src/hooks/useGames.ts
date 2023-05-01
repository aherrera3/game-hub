//hook for separating corcern: HTTP requests

import { useEffect, useState } from "react";
import { CanceledError } from "axios";
import apiClient from "../services/api-client";

export interface Platform {
  id: number;
  name: string;
  slug: string;
}
export interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platform }[]; // array of objects with platform property
  metacritic: number;
}

interface FetchGamesResponse {
  count: number;
  results: Game[];
}

const useGames = () => {
  // storing our game and errors objects
  const [games, setGames] = useState<Game[]>([]);
  const [error, setError] = useState([]);
  const [isLoading, setLoading] = useState(false);

  // sending fecth request to the backend
  useEffect(() => {
    const controller = new AbortController();

    setLoading(true);
    apiClient
      .get<FetchGamesResponse>("/games", { signal: controller.signal })
      .then((response) => {
        setGames(response.data.results);
        setLoading(false);
      }) //fetching the games data
      .catch((error) => {
        if (error instanceof CanceledError) return;
        setError(error.message);
        setLoading(false);
      });

    // cleanup function
    return () => controller.abort();
  }, []);

  return { games, error, isLoading };
};

export default useGames;
