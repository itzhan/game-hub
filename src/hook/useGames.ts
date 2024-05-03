import UseDatas from "./useData";
import { Genre } from "./useGenre";
import { PlatForm } from "./usePlatforms";

export interface Platforms {
  id: number;
  slug: string;
  name: string;
}

export interface Games {
    id: number;
    name: string;
    background_image: string;
    parent_platforms: {platform: Platforms}[],
    metacritic: number,
  }

const UseGames = (
  selectGenre: Genre | null, 
  selectPlatform: PlatForm | null) => 
    UseDatas<Games>('/games', 
  {params: {genres: selectGenre?.id, parent_platforms: selectPlatform?.id}}, 
    [selectGenre?.id, selectPlatform?.id])
export default UseGames