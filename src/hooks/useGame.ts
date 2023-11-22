// import ms from "ms";
import APIClient from "../services/api-client";
import { useQuery } from "@tanstack/react-query";
import Game from "../entities/Game";

const apiClient = new APIClient<Game>("/games");

const useGame = (slug: string) =>
  useQuery({
    queryKey: ["gameDetail", slug],
    queryFn: () => apiClient.get(slug),
    // staleTime: ms("24h"),
  });

export default useGame;
