import { useEffect, useState } from "react";
import type { Store } from "../types/types";

const useGameStore = () => {
  const [stores, setStores] = useState<Store[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchStores = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await fetch(
          "https://www.cheapshark.com/api/1.0/stores"
        );

        if (!response.ok)
          throw new Error(`An Error has occured: ${response.status}`);
        const data = await response.json();
        setStores(data);
      } catch (error: any) {
        console.error("Failed to fetch stores!");
      } finally {
        setLoading(false)
      }
    };

    fetchStores();
  }, []);

  return {
    stores,
    loading,
    error,
  };
};

export default useGameStore;
