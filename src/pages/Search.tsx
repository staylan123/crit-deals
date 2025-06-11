import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import useGameSearch from "../hooks/useGameSearch";
import GameCard from "../components/Card";
import useFetchGame from "../hooks/useFetchGame";

const Search = () => {
  const { fetchGameList, gameList, gameListError, gameListLoading } =
    useGameSearch();
  const [query, setQuery] = useState<string>("");
  const [selectedGameId, setSelectedGameId] = useState<number | null>(null);
  const { gameInfo, gameInfoError, gameInfoLoading } = useFetchGame({
    selectedGameId,
  });

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (!query.length) return;

    setSelectedGameId(null); // * Reset state
    if (e.key === "Enter") fetchGameList(query);
  };

  return (
    <Container>
      <h1 className="text-white">Search</h1>
      <input
        className="px-4 py-2 rounded w-100"
        style={{ maxWidth: "800px" }}
        type="text"
        placeholder="Enter Game Name"
        onChange={(e) => setQuery(e.target.value)}
        onKeyDown={handleKeyDown}
      />
      <Container>
        {gameListLoading ? (
          <p className="text-white">loading...</p>
        ) : gameListError ? (
          <p className="text-white">ERROR</p>
        ) : (
          <Container fluid="md">
            <Row>
              {gameList.map((game) => (
                <Col key={game.gameID} xs={12} sm={6} md={4} lg={3}>
                  <GameCard
                    game={game}
                    selectedGameId={selectedGameId}
                    gameInfo={gameInfo}
                    gameInfoError={gameInfoError}
                    gameInfoLoading={gameInfoLoading}
                    setSelectedGameId={setSelectedGameId}
                  />
                </Col>
              ))}
            </Row>
          </Container>
        )}
      </Container>
    </Container>
  );
};

export default Search;
