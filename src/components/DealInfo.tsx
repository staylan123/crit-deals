import type { Deal } from "../types/types";
import { useStoresContext } from "../context/useStoresContext";
import { Container } from "react-bootstrap";

const DealInfo = ({ deal }: { deal: Deal }) => {
  const { stores } = useStoresContext();
  console.log(deal);
  const storeInfo = stores.find((store) => store.storeID === deal.storeID);
  const discountAsNumber = Number(deal.savings) || 0;

  return (
    <Container className="p-3 d-flex gap-4 align-items-center rounded" style={{background: '#454545'}}>
      <img
        src={`https://www.cheapshark.com${storeInfo?.images.icon}`}
        alt="store-icon"
        style={{ height: "24px", width: "24px" }}
      />
      <p className="fw-semibold mb-0">{storeInfo?.storeName}</p>
      <div className="d-flex align-items-center gap-4 ms-auto">
        {deal.price < deal.retailPrice && (
          <p className="fw-bold mb-0 fs5 text-decoration-line-through">
            ${deal.retailPrice}
          </p>
        )}
        <p className="fw-bold mb-0 fs-3">${deal.price}</p>
        {discountAsNumber > 0 && (
          <span className="fs-4 fw-semibold px-2 bg-danger rounded text-white">
            {Math.ceil(discountAsNumber)}%
          </span>
        )}
      </div>
    </Container>
  );
};

export default DealInfo;
