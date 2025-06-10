import { Navigate, Route, Routes } from "react-router";
import "./App.css";
import NavbarComponent from "./components/Navbar";
import Home from "./pages/Home";
import Search from "./pages/Search";
import useGameStore from "./hooks/useGameStore";

function App() {
  const { stores, loading, error } = useGameStore()

  if (loading) return <p>Loading App</p>
  if (error) return <p>Application has failed to load!</p>

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
