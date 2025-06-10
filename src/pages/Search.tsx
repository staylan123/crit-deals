import React, { useState } from "react";
import { Container } from "react-bootstrap";
import useGameSearch from "../hooks/useGameSearch";

const Search = () => {
  const { fetchGameData, data, loading, error } = useGameSearch();
  const [query, setQuery] = useState<string>("");
    console.log(data)
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (!query.length) return;
    if (e.key === "Enter") fetchGameData(query);
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
        {
            loading ? <p className="text-white">loading...</p> :
            error ? <p className="text-white">ERROR</p> :
            <div>
                {
                    data.map((game : any) => <p>{game.external}</p>)
                }
            </div>
        }
      </Container>
    </Container>
  );
};

export default Search;
