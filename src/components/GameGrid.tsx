import React, { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { Text } from "@chakra-ui/react";

interface Game {
  id: number;
  name: string;
}

interface FetchGamesRespone {
  count: number;
  results: Game[];
}

const GameGrid = () => {
  // storing our game and errors objects
  const [games, setGames] = useState<Game[]>([]);
  const [error, setError] = useState([]);

  // sending fecth request to the backend
  useEffect(() => {
    apiClient
      .get<FetchGamesRespone>("/xgames")
      .then((response) => setGames(response.data.results))
      .catch((error) => {
        setError(error.message);
      });
  });

  return (
    <>
      {error && <Text>{error}</Text>}
      <ul>
        {games.map((game) => (
          <li key={game.id}>{game.name}</li>
        ))}
      </ul>
    </>
  );
};

export default GameGrid;
