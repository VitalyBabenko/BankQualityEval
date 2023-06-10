import { Container } from "@mui/material";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <header>
      <Container maxWidth="md">
        <Link to="/">
          <img src={logo} alt="CNB Logo" />
        </Link>
      </Container>
    </header>
  );
};
