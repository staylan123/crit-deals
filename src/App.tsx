import { Navigate, Route, Routes } from "react-router";
import "./App.css";
import NavbarComponent from "./components/Navbar";
import useGameSearch from "./hooks/useGameSearch";
import Home from "./pages/Home";
import Search from "./pages/Search";

function App() {
  const { fetchGameData } = useGameSearch();

  return (
    <main>
      <NavbarComponent />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search" element={<Search />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </main>
  );
}

export default App;
