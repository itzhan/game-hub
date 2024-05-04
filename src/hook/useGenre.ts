import genre from "../data/genre";

export interface Genre {
    id: number;
    name: string;
    slug: string;
    "image_background": string;
}

const UseGenre = () => ({data: genre, error: null, isLoding: false})

export default UseGenre