import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { CanceledError } from "axios";

export interface Genre {
    id: number;
    name: string;
    slug: string;
}

export interface FetchGenres {
    count:number;
    results: Genre[];
}

const UseGenre = () => {
    const [genres, setGenres] = useState<Genre[]>([]);
    const [error, setError] = useState("");
    const [isLoding, setLoding] =  useState(false);
    
    useEffect(() => {
      const controller = new AbortController();

      setLoding(true);
      apiClient
        .get<FetchGenres>("/genres", {signal: controller.signal})
        .then((res) => { 
          setGenres(res.data.results);
          setLoding(false);
         })
        .catch((error) => {
            if (error instanceof CanceledError) return;
            setError(error.message);
            setLoding(false);
    });

        return () => controller.abort();
    }, []);

    return {genres, error, isLoding}
}

export default UseGenre