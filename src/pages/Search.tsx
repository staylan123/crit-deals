import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import useGameSearch from "../hooks/useGameSearch";
import GameCard from "../components/Card";
import Loader from "../components/Loader";
import GameSearchFailed from "../components/GameSearchFailed";
import { useNavigate, useParams } from "react-router";

const Search = () => {
  const { query: _query } = useParams() // * Taken from URL
  const navigate = useNavigate()
  const { fetchGameList, gameList, gameListError, gameListLoading } = useGameSearch();
  const [query, setQuery] = useState<string>(decodeURIComponent(_query || ""));

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (!query.trim().length) return;
    if (e.key === "Enter") navigate(`/search/${encodeURIComponent(query)}`);
  };

  useEffect(() => {
    if (!_query) return // * Prevent pre-fetch
    fetchGameList(query.trim())
  }, [_query])

  return (
    <Container className="mt-2">
      <h1 className="text-white">Search</h1>
      <input
        className="px-4 py-2 rounded w-100"
        style={{ maxWidth: "800px" }}
        type="text"
        placeholder="Enter Game Name"
        onChange={(e) => setQuery(e.target.value)}
        onKeyDown={handleKeyDown}
        value={query}
      />
      <div>
        {gameListLoading ? (
          <Loader />
        ) : gameListError ? (
          <GameSearchFailed />
        ) : (
          <Container fluid="md" className="my-4">
            <Row className="gy-4">
              {gameList.map((game) => (
                <Col key={game.gameID} xs={12} sm={6} md={4} lg={3}>
                  <GameCard game={game} />
                </Col>
              ))}
            </Row>
          </Container>
        )}
      </div>
    </Container>
  );
};

export default Search;
