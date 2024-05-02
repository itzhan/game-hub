import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { CanceledError } from "axios";

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
  
  interface FetchGames {
    count: number;
    results: Games[];
  }

const UseGames = () => {
    const [games, setGames] = useState<Games[]>([]);
    const [error, setError] = useState("");
    const [isLoding, setLoding] =  useState(false);
    
    useEffect(() => {
      const controller = new AbortController();

      setLoding(true);
      apiClient
        .get<FetchGames>("/games", {signal: controller.signal})
        .then((res) => { 
          setGames(res.data.results);
          setLoding(false);
         })
        .catch((error) => {
            if (error instanceof CanceledError) return;
            setError(error.message);
            setLoding(false);
    });

        return () => controller.abort();
    }, []);

    return {games, error, isLoding}
}

export default UseGames