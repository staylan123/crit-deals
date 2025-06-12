import { Container } from "react-bootstrap";
import { useNavigate } from "react-router";

const Home = () => {
  const navigate = useNavigate()

  return (
    <div
      style={{
        backgroundImage: "url(/home.jpg)",
        minHeight: "100vh",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="bg-dark bg-opacity-75 p-5 vh-100">
        <Container className="text-white text-center mt-4">
          <h1>Welcome to <span className="brand-color">Crit Deals</span></h1>
          <p className="fs-4">Find the latest gaming deals!</p>
          <button className="bg-brand text-white fw-bold px-4 py-2 rounded border-0" onClick={() => navigate('/search')}>Explore Deals</button>
        </Container>
      </div>
    </div>
  );
};

export default Home;
