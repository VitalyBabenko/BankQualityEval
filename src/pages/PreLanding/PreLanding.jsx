import { Container, Button } from "@mui/material";
import { Link } from "react-router-dom";
import { Header } from "../../components/Header";
import { ReactComponent as Decor } from "../../assets/decor.svg";
import style from "./PreLanding.module.scss";

export const PreLanding = () => {
  return (
    <>
      <Container className={style.root} maxWidth="lg">
        <Header />
        <main>
          <h1>
            Státní statistické zjišťování kvality služeb bank v České republice
          </h1>
          <p>
            Shromažďuje informace za účelem zlepšení bankovních služeb a
            podpory. Po odpovědi můžete získat bonus na svůj účet v jedné z
            bank, jejichž jste klientem.
          </p>

          <Link to="/form">
            <Button size="large" variant="contained">
              Contained button
            </Button>
          </Link>
        </main>
      </Container>
      <div className={style.background}>
        <Decor className={style.decor} />
      </div>
    </>
  );
};
