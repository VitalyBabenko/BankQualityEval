import { Container } from "@mui/material";
import style from "./Header.module.scss";
import logo from "../../assets/logo.png";

export const Header = () => {
  return (
    <header className={style.root}>
      <Container className={style.container} maxWidth="md">
        <img src={logo} alt="CNB Logo" />
      </Container>
    </header>
  );
};
