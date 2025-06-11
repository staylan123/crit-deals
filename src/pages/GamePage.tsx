import { useParams } from "react-router";
import useFetchGame from "../hooks/useFetchGame";
import { Container } from "react-bootstrap";
import GameNotFound from "../components/GameNotFound";
import Loader from "../components/Loader";
import GameInfoCard from "../components/GameInfo";

const GamePage = () => {
  const params = useParams();
  const gameID = Number(params.gameID);

  const { gameInfo, gameInfoError, gameInfoLoading } = useFetchGame({
    selectedGameId: gameID,
  });
  return (
    <Container>
      {gameInfoLoading ? (
        <Loader size={80} />
      ) : gameInfoError ? (
        <GameNotFound />
      ) : ( <GameInfoCard gameInfo={gameInfo} />

      )}
    </Container>
  );
};

export default GamePage;
