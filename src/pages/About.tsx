import { Container } from "react-bootstrap";

const About = () => {
  return (
    <Container className="text-white p-4">
      <h2 className="mb-4">About Us</h2>
      <p>
        Crit Deals is a simple React application built using the{" "}
        <a className='brand-color' href="https://apidocs.cheapshark.com/" target="_blank">
          CheapShark API
        </a>{" "}
        to find the latest deals on video games.
      </p>
      <p>
        This application is for
        demostration purposes, and is no means a real storefront or service. All
        purchase links will be affiliate for <a className='brand-color' href='https://www.cheapshark.com/' target="_blank">CheapShark</a> to assist them in
        getting kickback from any purchases made.
      </p>
      <h3>Tech Stack</h3>
      <ul>
        <li>React</li>
        <li>Typescript</li>
        <li>Bootstrap (React Bootstrap)</li>
        <li>React Router</li>
      </ul>
    </Container>
  );
};

export default About;
