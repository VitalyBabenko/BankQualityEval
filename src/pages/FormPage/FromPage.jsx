import { Container, Paper, TextField } from "@mui/material";
import style from "./FormPage.module.scss";
import { Header } from "../../components/Header/Header";

export const FromPage = () => {
  return (
    <>
      <Header />
      <Container className={style.root} maxWidth="md">
        <Paper className={style.paper} elevation={3}>
          <span>Vaše emailová adresa</span>
          <TextField id="standard-basic" label="E-mailem" variant="standard" />
        </Paper>

        <Paper className={style.paper} elevation={3}>
          <span>Vaše celé jméno</span>
          <TextField id="standard-basic" label="Název" variant="standard" />
        </Paper>

        <Paper className={style.paper} elevation={3}>
          <span>Váš věk</span>
          <TextField id="standard-basic" label="věk" variant="standard" />
        </Paper>
      </Container>
    </>
  );
};
