import { GameQuery } from "../App";
import UseDatas from "./useData";

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
  gameQuery: GameQuery) => 
    UseDatas<Games>(
      '/games', 
  {
    params: {
      genres: gameQuery.genre?.id, 
      parent_platforms: gameQuery.platform?.id,
      ordering: gameQuery?.sortOrder
      }
    }, 
    [gameQuery])
export default UseGames