import { Button, Card, ListGroup } from "react-bootstrap";
import type { GameItem, GameItemDetailed } from "../types/types";
import { useState } from "react";
import DealInfo from "./DealInfo";

const GameCard = ({ game } : { game: GameItem }) => {
  // * Game Item State
  const [gameInfo, setGameInfo] = useState<GameItemDetailed | null>(null);
  const [gameInfoError, setGameInfoError] = useState<Error | null>(null);
  const [gameInfoLoading, setGameInfoLoading] = useState<boolean>(false);

  const fetchGameInfo = async () => {
    setGameInfoLoading(true);

    try {
      const response = await fetch(
        `https://www.cheapshark.com/api/1.0/games?id=${encodeURIComponent(
          game.gameID
        )}`
      );

      if (!response.ok)
        throw new Error(`An Error has occured: ${response.status}`);
      const data = await response.json();
      setGameInfo(data);
    } catch (error: any) {
      console.error("Failed to fetch games!");
      setGameInfoError(error.message);
    } finally {
      setGameInfoLoading(false);
    }
  };

  return (
    <Card style={{ maxWidth: "400px" }}>
      <Card.Img variant="top" src={game.thumb} />
      <Card.Body>
        <Card.Title>{game.external}</Card.Title>
        <Button variant="primary" onClick={fetchGameInfo}>
          See Deals
        </Button>
      </Card.Body>
      {gameInfoLoading ? (
        <p>...</p>
      ) : gameInfoError ? (
        <p>Unable to get deals!</p>
      ) : (
        <ListGroup className="list-group-flush">
          {
            gameInfo?.deals.map(deal => <DealInfo deal={deal} key={deal.dealID} />)
          }
        </ListGroup>
      )}
    </Card>
  );
};

export default GameCard;
