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
    platforms: {platform: Platforms}[],
    metacritic: number,
  }

const UseGames = () => UseDatas<Games>('/games')
export default UseGames