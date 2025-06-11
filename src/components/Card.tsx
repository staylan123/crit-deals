import { Button, Card, ListGroup } from "react-bootstrap";
import type { GameItem, GameItemDetailed } from "../types/types";
import { type SetStateAction } from "react";
import DealInfo from "./DealInfo";

type GameCardProps = {
  game: GameItem;
  selectedGameId: number | null;
  gameInfo: GameItemDetailed | null;
  gameInfoError: Error | null;
  gameInfoLoading: boolean;
  setSelectedGameId: React.Dispatch<SetStateAction<number | null>>;
};

const GameCard = ({
  game,
  selectedGameId,
  gameInfo,
  gameInfoError,
  gameInfoLoading,
  setSelectedGameId,
}: GameCardProps) => {
  console.log(game.gameID === selectedGameId);
  return (
    <Card style={{ maxWidth: "400px" }}>
      <Card.Img variant="top" src={game.thumb} />
      <Card.Body>
        <Card.Title>{game.external}</Card.Title>
        <Button
          variant="primary"
          onClick={() => setSelectedGameId(game.gameID)}
        >
          See Deals
        </Button>
      </Card.Body>
      {game.gameID === selectedGameId && (
        <>
          {gameInfoLoading ? (
            <p>...</p>
          ) : gameInfoError ? (
            <p>Unable to get deals!</p>
          ) : (
            <ListGroup className="list-group-flush">
              {gameInfo?.deals.map((deal) => (
                <DealInfo deal={deal} key={deal.dealID} />
              ))}
            </ListGroup>
          )}
        </>
      )}
    </Card>
  );
};

export default GameCard;
