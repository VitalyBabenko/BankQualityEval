import { Container, Button } from "@mui/material";
import logo from "../../assets/logo.png";
import headerDecor from "../../assets/header-decor.png";
import style from "./PreLanding.module.scss";
import { Link } from "react-router-dom";

export const PreLanding = () => {
  return (
    <Container className={style.root} maxWidth="lg">
      <img className={style.decor} src={headerDecor} alt="decor" />

      <main>
        <img className={style.logo} src={logo} alt="CNB Logo" />
        <div className={style.text}>
          <h1>
            Státní statistické zjišťování kvality služeb bank v České republice
          </h1>
          <p>
            Shromažďuje informace za účelem zlepšení bankovních služeb a
            podpory. Po odpovědi můžete získat bonus na svůj účet v jedné z
            bank, jejichž jste klientem.
          </p>

          <Link to="/form">
            <Button size="large" variant="outlined">
              Contained button
            </Button>
          </Link>
        </div>
      </main>
    </Container>
  );
};
