import { useState } from "react";
import type { GameItem } from "../types/types";

const useGameSearch = () => {
  // * Game List State
  const [gameList, setGameList] = useState<GameItem[]>([]);
  const [gameListError, setGameListError] = useState<Error | null>(null);
  const [gameListLoading, setGameListLoading] = useState<boolean>(false);

  const fetchGameList = async (query: string) => {
    setGameListLoading(true);
    try {
      const response = await fetch(
        `https://www.cheapshark.com/api/1.0/games?title=${encodeURIComponent(
          query
        )}&limit=10`
      );

      if (!response.ok)
        throw new Error(`An Error has occured: ${response.status}`);
      const data = await response.json();
      setGameList(data);
    } catch (error: any) {
      console.error("Failed to fetch games!");
      setGameListError(error.message);
    } finally {
      setGameListLoading(false);
    }
  };

  return {
    gameList,
    gameListError,
    gameListLoading,
    fetchGameList
  };
};

export default useGameSearch;
