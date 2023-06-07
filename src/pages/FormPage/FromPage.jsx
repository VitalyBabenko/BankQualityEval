import { Container, Paper } from "@mui/material";
import style from "./FormPage.module.scss";
import { Header } from "../../components/Header/Header";
import { UserInfoForm } from "../../components/UserInfoForm/UserInfoForm";
import { YourBanksForm } from "../../components/YourBanksForm/YourBanksForm";

export const FromPage = () => {
  return (
    <>
      <Header />
      <Container className={style.root} maxWidth="md">
        <Paper className={style.title} elevation={3}>
          <h2>
            Státní statistické zjišťování kvality služeb bank v České republice
          </h2>
          <p>
            Shromažďuje informace za účelem zlepšení bankovních služeb a
            podpory. Po odpovědi můžete získat bonus na svůj účet v jedné z
            bank, jejichž jste klientem.
          </p>
        </Paper>

        <UserInfoForm />
        <YourBanksForm />
      </Container>
    </>
  );
};
