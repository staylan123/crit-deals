import { Button, Card } from "react-bootstrap";
import type { GameItem } from "../types/types";
import { useNavigate } from "react-router";

type GameCardProps = {
  game: GameItem;
};

const GameCard = ({
  game
}: GameCardProps) => {
  const navigate = useNavigate()

  return (
    <Card style={{ maxWidth: "400px" }} className="bg-dark text-white">
      <Card.Img variant="top" src={game.thumb} className="card-img-fixed"/>
      <Card.Body>
        <Card.Title>{game.external}</Card.Title>
        <Card.Body className="p-0 mb-2">As low as ${game.cheapest}</Card.Body>
        <Button
          className="bg-brand border-success"
          onClick={() => navigate(`/games/${game.gameID}`)}
        >
          See Deals
        </Button>
      </Card.Body>
    </Card>
  );
};

export default GameCard;
