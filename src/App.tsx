import { Navigate, Route, Routes } from "react-router";
import "./App.css";
import NavbarComponent from "./components/Navbar";
import Home from "./pages/Home";
import Search from "./pages/Search";
import { useStoresContext } from "./context/useStoresContext";
import GamePage from "./pages/GamePage";

function App() {
  const {loading, error} = useStoresContext()

  if (loading) return <p>Loading App</p>
  if (error) return <p>Application has failed to load!</p>

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
