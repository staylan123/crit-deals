import type { Deal } from "../types/types";
import { useStoresContext } from "../context/useStoresContext";
import { Container } from "react-bootstrap";

const DealInfo = ({ deal }: { deal: Deal }) => {
  const { stores } = useStoresContext();

  const storeInfo = stores.find((store) => store.storeID === deal.storeID);
  const discountAsNumber = Number(deal.savings) || 0;

  return (
    <Container className="d-flex align-items-center gap-2 my-2">
      <img
        src={`https://www.cheapshark.com${storeInfo?.images.icon}`}
        alt="store-icon"
      />
      <p className="fw-semibold mb-0">{storeInfo?.storeName}</p>
      <div className="d-flex gap-2 ms-auto">
        {discountAsNumber > 0 && (
          <span className="fw-semibold px-2 bg-danger rounded text-white">
            {Math.ceil(discountAsNumber)}%
          </span>
        )}
        <p className="fw-bold mb-0">${deal.price}</p>
      </div>
    </Container>
  );
};

export default DealInfo;
