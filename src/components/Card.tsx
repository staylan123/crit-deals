import { Button, Card, ListGroup } from "react-bootstrap";
import type { GameItem, GameItemDetailed } from "../types/types";
import { type SetStateAction } from "react";
import DealInfo from "./DealInfo";
import { useNavigate } from "react-router";

type GameCardProps = {
  game: GameItem;
};

const GameCard = ({
  game
}: GameCardProps) => {
  const navigate = useNavigate()

  return (
    <Card style={{ maxWidth: "400px" }}>
      <Card.Img variant="top" src={game.thumb} className="card-img-fixed"/>
      <Card.Body>
        <Card.Title>{game.external}</Card.Title>
        <Button
          variant="primary"
          onClick={() => navigate(`/games/${game.gameID}`)}
        >
          See Deals
        </Button>
      </Card.Body>
    </Card>
  );
};

export default GameCard;
