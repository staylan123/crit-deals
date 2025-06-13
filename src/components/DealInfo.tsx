import type { Deal } from "../types/types";
import { useStoresContext } from "../context/useStoresContext";
import { Container } from "react-bootstrap";
import { BiLinkExternal } from "react-icons/bi";

const DealInfo = ({ deal }: { deal: Deal }) => {
  const { stores } = useStoresContext();
  const storeInfo = stores.find((store) => store.storeID === deal.storeID);
  const discountAsNumber = Number(deal.savings) || 0;

  const handleBuy = () => {
    const url = `https://www.cheapshark.com/redirect?dealID=${deal.dealID}`;
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <Container
      className="p-3 d-flex flex-column gap-4 rounded flex-md-row align-items-md-center"
      style={{ background: "#454545" }}
    >
      <div className="d-flex align-items-center gap-2 gap-md-4 m-auto m-md-0">
        <img
          src={`https://www.cheapshark.com${storeInfo?.images.icon}`}
          alt="store-icon"
          style={{ height: "24px", width: "24px" }}
        />
        <p className="fw-semibold mb-0">{storeInfo?.storeName}</p>
      </div>
      <div className="d-flex align-items-center gap-4 m-auto flex-md-grow-1 justify-content-md-end">
        <div className="d-md-flex align-items-md-center gap-md-2">
          {Number(deal.price) < Number(deal.retailPrice) && (
            <p className="fw-bold mb-0 fs5 text-decoration-line-through">
              ${deal.retailPrice}
            </p>
          )}
          <p className="fw-bold mb-0 fs-3">${deal.price}</p>
        </div>
        {discountAsNumber > 0 && (
          <span className="fs-4 fw-semibold px-2 bg-danger rounded text-white">
            {Math.ceil(discountAsNumber)}%
          </span>
        )}
      </div>
      <button
        onClick={handleBuy}
        className="bg-brand text-white rounded py-2 px-4 fw-bold"
      >
        <BiLinkExternal /> Buy Now
      </button>
    </Container>
  );
};

export default DealInfo;
