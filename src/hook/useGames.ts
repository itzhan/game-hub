import UseDatas from "./useData";
import { Genre } from "./useGenre";

export interface Platforms {
  id: number;
  slug: string;
  name: string;
}

export interface Games {
    id: number;
    name: string;
    background_image: string;
    platforms: {platform: Platforms}[],
    metacritic: number,
  }

const UseGames = (selectGenre: Genre | null) => UseDatas<Games>('/games', {params: {genres: selectGenre?.id}}, [selectGenre?.id])
export default UseGames