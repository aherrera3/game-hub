import Genre from "./Genre";
import Platform from "./Platform";
import Publisher from "./Publisher";

export default interface Game {
  id: number;
  slug: string;
  name: string;
  publishers: Publisher[];
  genres: Genre[];
  description_raw: string;
  background_image: string;
  parent_platforms: { platform: Platform }[]; // array of objects with platform property
  metacritic: number;
  rating_top: number;
}
