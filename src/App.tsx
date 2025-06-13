import { BrowserRouter, Navigate, Route, Routes } from "react-router";
import "./App.css";
import NavbarComponent from "./components/Navbar";
import Home from "./pages/Home";
import Search from "./pages/Search";
import GamePage from "./pages/GamePage";
import Footer from "./components/Footer";
import { StoresContextProvider } from "./context/useStoresContext";

function App() {
  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <BrowserRouter>
        <StoresContextProvider>
          <NavbarComponent />
          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/search/:query?" element={<Search />} />
              <Route path="/games/:gameID" element={<GamePage />} />
              <Route path="*" element={<Navigate to="/" />} />
            </Routes>
          </main>
          <Footer />
        </StoresContextProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
