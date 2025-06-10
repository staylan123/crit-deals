import "bootstrap/dist/css/bootstrap.min.css";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { BrowserRouter } from "react-router";
import { StoresContextProvider } from "./context/useStoresContext.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <StoresContextProvider>
        <App />
      </StoresContextProvider>
    </BrowserRouter>
  </StrictMode>
);
