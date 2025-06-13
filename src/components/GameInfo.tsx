import { Container } from "react-bootstrap";
import type { GameItemDetailed } from "../types/types";
import DealInfo from "./DealInfo";

const GameInfoCard = ({ gameInfo }: { gameInfo: GameItemDetailed | null}) => {
  if (!gameInfo) return null

  return (
    <Container className="text-white p-4 rounded bg-dark d-flex flex-column gap-4 my-5">
        <h3 className="text-center text-md-start">{gameInfo.info.title}</h3>
        <img className='m-auto m-md-0' style={{height: '100px', maxWidth: '200px'}} src={gameInfo.info.thumb} alt={gameInfo.info.title} />
        <div className="d-flex flex-column gap-2">
          {
            gameInfo.deals.map(deal => <DealInfo key={deal.dealID} deal={deal}/>)
          }
        </div>
    </Container>
  );
};

export default GameInfoCard;
