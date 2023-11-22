import { useQuery } from "@tanstack/react-query";
import ms from "ms";
import APIClient, { FetchResponse } from "../services/api-client";
import genres from "../data/genres";
import Genre from "../entities/Genre";

//creating an instance of APICLient class for working with genres
const apiClient = new APIClient<Genre>("/genres");
//refactor useGenres.ts using react query to fetch the genre for our API.

const useGenres = () =>
  useQuery<FetchResponse<Genre>, Error>({
    queryKey: ["genres"],
    queryFn: apiClient.getAll,
    staleTime: ms("24h"),
    initialData: genres, //this data is inserted into the cache
  });

// return { data: genres, isLoading: false, error: null }; //useData<Genre>("/genres");

export default useGenres;
