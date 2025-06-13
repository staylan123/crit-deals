import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import useGameSearch from "../hooks/useGameSearch";
import GameCard from "../components/Card";
import Loader from "../components/Loader";
import GameSearchFailed from "../components/GameSearchFailed";
import { useNavigate, useParams } from "react-router";
import { FaSearch } from "react-icons/fa";

const Search = () => {
  const { query: _query } = useParams(); // * Taken from URL
  const navigate = useNavigate();
  const { fetchGameList, gameList, gameListError, gameListLoading } =
    useGameSearch();
  const [query, setQuery] = useState<string>(decodeURIComponent(_query || ""));

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (!query.trim().length) return;
    if (e.key === "Enter") navigate(`/search/${encodeURIComponent(query)}`);
  };

  useEffect(() => {
    if (!_query) return; // * Prevent pre-fetch
    fetchGameList(query.trim());
  }, [_query]);

  return (
    <Container className="mt-4">
      <div className="text-white d-flex align-items-center gap-2 mb-2">
        <FaSearch size={28} />
        <h2 className="m-0">Search</h2>
      </div>
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
          <Container fluid="md" className="my-4 p-0">
            {!gameList.length ? (
              <p className="text-white text-center fs-4">No Games Found</p>
            ) : (
              <Row className="gy-4">
                {gameList.map((game) => (
                  <Col key={game.gameID} xs={12} sm={6} md={4} lg={3}>
                    <GameCard game={game} />
                  </Col>
                ))}
              </Row>
            )}
          </Container>
        )}
      </div>
    </Container>
  );
};

export default Search;
