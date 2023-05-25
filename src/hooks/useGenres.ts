import { useQuery } from "@tanstack/react-query";
import APIClient, { FetchResponse } from "../services/api-client";
import genres from "../data/genres";

//creating an instance of APICLient class for working with genres
const apiClient = new APIClient<Genre>("/genres");
export interface Genre {
  id: number;
  name: string;
  image_background: string;
}

//refactor useGenres.ts using react query to fetch the genre for our API.

const useGenres = () =>
  useQuery<FetchResponse<Genre>, Error>({
    queryKey: ["genres"],
    queryFn: apiClient.getAll,
    staleTime: 24 * 60 * 60 * 1000, // 24 hrs
    initialData: { count: genres.length, results: genres }, //this data is inserted into the cache
  });

// return { data: genres, isLoading: false, error: null }; //useData<Genre>("/genres");

export default useGenres;
