import { createContext, useContext, type ReactNode } from "react";
import type { Store } from "../types/types";
import useGameStore from "../hooks/useGameStore";

type StoresContextProps = {
  stores: Store[];
  loading: boolean;
  error: Error | null;
};

const StoresContext = createContext<StoresContextProps | undefined>(undefined);

// * Although overkill - we should get store data upon loading the application
export const StoresContextProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const { stores, loading, error } = useGameStore();

  const contextData = { stores, loading, error };

  return (
    <StoresContext.Provider value={contextData}>
      {children}
    </StoresContext.Provider>
  );
};

export const useStoresContext = () => {
  const context = useContext(StoresContext);
  if (!context) {
    throw new Error("useStoresContext must be used within StoresContext");
  }
  return context;
};
