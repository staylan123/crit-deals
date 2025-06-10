import React, { useState } from "react";

const useGameSearch = () => {
  const [data, setData] = useState<any>([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState<boolean>(false);

  const fetchGameData = async (query: string) => {
    setLoading(true);

    try {
      const response = await fetch(
        `https://www.cheapshark.com/api/1.0/games?title=${encodeURIComponent(
          query
        )}&limit=10`
      );

      if (!response.ok) throw new Error(`An Error has occured: ${response.status}`);
      const _data = await response.json();
      setData(_data);
    } catch (error: any) {
      console.error("Failed to fetch games!");
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  return {
    data,
    error,
    loading,
    fetchGameData,
  };
};

export default useGameSearch;
