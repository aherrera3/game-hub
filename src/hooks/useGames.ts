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

  // sending fecth request to the backend
  useEffect(() => {
    const controller = new AbortController();

    apiClient
      .get<FetchGamesResponse>("/games", { signal: controller.signal })
      .then((response) => setGames(response.data.results)) //fetching the games data
      .catch((error) => {
        if (error instanceof CanceledError) return;
        setError(error.message);
      });

    // cleanup function
    return () => controller.abort();
  }, []);

  return { games, error };
};

export default useGames;
