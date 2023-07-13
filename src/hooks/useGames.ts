import { useEffect, useState } from "react";
import ApiClient from "../services/api-file";
import { CanceledError } from "axios";

export interface Platform{
    id: number;
    name: string;
    slug: string;
}

export interface Game {
    id: number;
    name: string;
    background_image: string;
    parent_platforms: { platform: Platform }[];
    metacritic: number;
  }
  interface FetchGamesResponse {
    count: number;
    results: Game[];
  }
  
const useGames = () => {
    const [games, setgames] = useState<Game[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setLoading] = useState(false);
    useEffect(() => {
      const controller = new AbortController();
      setLoading(true);
    ApiClient.get<FetchGamesResponse>("./games",{signal:controller.signal})
      .then((res) => {
        setgames(res.data.results)
        setLoading(false);
      })
        .catch((err) => {
          if (err instanceof CanceledError) return; setError(err.message)
          setLoading(false);
        });
        return () => controller.abort();
    }, []);
    return { games, error,isLoading };
}
export default useGames;