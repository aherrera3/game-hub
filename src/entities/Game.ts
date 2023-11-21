import { Platform } from "./Platform";

export interface Game {
  id: number;
  slug: string;
  name: string;
  description_raw: string;
  background_image: string;
  parent_platforms: { platform: Platform }[]; // array of objects with platform property
  metacritic: number;
  rating_top: number;
}
