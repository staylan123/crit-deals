import React from "react";
import { Container } from "react-bootstrap";

const Loader = ({ size = 48 }: { size?: number }) => {
  const loaderStyle: React.CSSProperties = {
    width: size,
    height: size,
    border: "5px solid #FFF",
    borderBottomColor: "rgb(0, 255, 0)",
    borderRadius: "50%",
    display: "inline-block",
    boxSizing: "border-box",
    animation: "rotation 1s linear infinite",
  };

  const keyframes = `
    @keyframes rotation {
        0% { transform: rotate(0deg); }
        100% { transform: rotate(360deg); }
    }
`;

  return (
    <Container className="d-flex justify-content-center" style={{marginTop: '20rem'}}>
      <style>{keyframes}</style>
      <div style={loaderStyle}></div>
    </Container>
  );
};

export default Loader;
