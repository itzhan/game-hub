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
    
    useEffect(() => {
      const controller = new AbortController();

      apiClient
        .get<FetchGames>("/games", {signal: controller.signal})
        .then((res) => setGames(res.data.results))
        .catch((error) => {
            if (error instanceof CanceledError) return;
            setError(error.message);
    });

        return () => controller.abort();
    }, []);

    return {games, error}
}

export default UseGames