import { Container } from "react-bootstrap";
import type { GameItemDetailed } from "../types/types";
import DealInfo from "./DealInfo";

const GameInfoCard = ({ gameInfo }: { gameInfo: GameItemDetailed | null}) => {
  if (!gameInfo) return null

  return (
    <Container className="text-white p-4 rounded bg-dark d-flex flex-column gap-4 mt-5">
        <h2>{gameInfo.info.title}</h2>
        <img style={{height: '100px', width: '200px'}} src={gameInfo.info.thumb} alt={gameInfo.info.title} />
        <div className="d-flex flex-column gap-2">
          {
            gameInfo.deals.map(deal => <DealInfo key={deal.dealID} deal={deal}/>)
          }
        </div>
    </Container>
  );
};

export default GameInfoCard;
