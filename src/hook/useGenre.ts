import UseDatas from "./useData";

export interface Genre {
    id: number;
    name: string;
    slug: string;
    "image_background": string;
}

const UseGenre = () => UseDatas<Genre>('/genres')

export default UseGenre