import { Container } from "react-bootstrap";

const GameSearchFailed = () => {
  return (
    <Container
      className="text-white text-center"
      style={{ marginTop: "16rem" }}
    >
      <h2>Error</h2>
      <p>Unable to retrieve games! Please try again later.</p>
    </Container>
  );
};

export default GameSearchFailed;
