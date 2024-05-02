import UseDatas from "./useData";

export interface Genre {
    id: number;
    name: string;
    slug: string;
}

const UseGenre = () => UseDatas<Genre>('/genres')

export default UseGenre