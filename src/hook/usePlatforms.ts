import UseDatas from "./useData";

export interface PlatForm {
    id: number;
    slug: string;
    name: string;
}

const usePlatfroms = () => UseDatas<PlatForm>('/platforms/lists/parents')

export default usePlatfroms;