import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { CanceledError } from "axios";
  
interface FetchDatas<T> {
    count: number;
    results: T[];
  }

const UseDatas = <T>(endpoint: string) => {
    const [data, setDatas] = useState<T[]>([]);
    const [error, setError] = useState("");
    const [isLoding, setLoding] =  useState(false);
    
    useEffect(() => {
      const controller = new AbortController();

      setLoding(true);
      apiClient
        .get<FetchDatas<T>>(endpoint, {signal: controller.signal})
        .then((res) => { 
          setDatas(res.data.results);
          setLoding(false);
         })
        .catch((error) => {
            if (error instanceof CanceledError) return;
            setError(error.message);
            setLoding(false);
    });

        return () => controller.abort();
    }, []);

    return {data, error, isLoding}
}

export default UseDatas