import { Button, Container } from "@mui/material";
import { Header } from "../../components/Header";
import style from "./ThankYouPage.module.scss";

export const ThankYouPage = () => {
  return (
    <Container className={style.root} maxWidth="lg">
      <Header />
      <main>
        <h1>Děkujeme, že se podílíte na zlepšování kvality služeb!</h1>
        <p>
          Děkujeme vám za vyplnění dotazníku a po kontrole odpovědí si můžete
          vyzvednout odměnu. Poté se musíte přihlásit a bonus bude připsán
          automaticky (čas závisí na vaší bance). Na jednu osobu připadá jeden
          bonus, průzkum nemusíte vyplňovat vícekrát!
        </p>

        <a href="https://www.cnb.cz">
          <Button size="large" variant="contained">
            Začít
          </Button>
        </a>
      </main>
    </Container>
  );
};
