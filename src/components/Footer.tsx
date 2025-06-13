import { Container } from "react-bootstrap";

const Footer = () => {
  const year = new Date().getFullYear();


  return (
    <footer className="text-white bg-dark p-4 mt-auto">
      <Container>
        <p className="m-0">© {year} Crit Deals</p>
      </Container>
    </footer>
  );
};

export default Footer;
