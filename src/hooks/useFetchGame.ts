import { useEffect, useState } from "react";
import type { GameItemDetailed } from "../types/types";

const useFetchGame = ({
  selectedGameId,
}: {
  selectedGameId: number | null;
}) => {
  const [gameInfo, setGameInfo] = useState<GameItemDetailed | null>(null);
  const [gameInfoError, setGameInfoError] = useState<Error | null>(null);
  const [gameInfoLoading, setGameInfoLoading] = useState<boolean>(false);

  useEffect(() => {
    if (!selectedGameId) return;

    const fetchGameInfo = async () => {
      if (!selectedGameId) return;
      setGameInfoLoading(true);

      try {
        const response = await fetch(
          `https://www.cheapshark.com/api/1.0/games?id=${encodeURIComponent(
            selectedGameId
          )}`
        );

        if (!response.ok)
          throw new Error(`An Error has occured: ${response.status}`);
        const data = await response.json();
        setGameInfo(data);
      } catch (error: any) {
        console.error("Failed to fetch games!");
        setGameInfoError(error.message);
      } finally {
        setGameInfoLoading(false);
      }
    };

    fetchGameInfo();
  }, [selectedGameId]);

  return { gameInfo, gameInfoError, gameInfoLoading };
};

export default useFetchGame;
