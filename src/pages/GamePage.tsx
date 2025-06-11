import React from "react";
import { useParams } from "react-router";
import useFetchGame from "../hooks/useFetchGame";
import { Container } from "react-bootstrap";
import GameNotFound from "../components/GameNotFound";
import Loader from "../components/Loader";

const GamePage = () => {
  const params = useParams();
  const gameID = Number(params.gameID);

  const { gameInfo, gameInfoError, gameInfoLoading } = useFetchGame({
    selectedGameId: gameID,
  });
  console.log(gameInfo);

  return (
    <Container>
      {gameInfoLoading ? (
        <Loader size={80} />
      ) : gameInfoError ? (
        <GameNotFound />
      ) : (
        <p className="text-white">{gameInfo?.info.title}</p>
      )}
    </Container>
  );
};

export default GamePage;
