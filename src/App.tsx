import { Navigate, Route, Routes } from "react-router";
import "./App.css";
import NavbarComponent from "./components/Navbar";
import Home from "./pages/Home";
import Search from "./pages/Search";
import GamePage from "./pages/GamePage";

function App() {
  return (
    <main>
      <NavbarComponent />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search/:query?" element={<Search />} />
        <Route path="/games/:gameID" element={<GamePage />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </main>
  );
}

export default App;
