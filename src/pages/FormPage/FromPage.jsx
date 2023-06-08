import { Button, Container, Paper } from "@mui/material";
import style from "./FormPage.module.scss";
import { Header } from "../../components/Header";

import { UserInfoForm } from "../../components/UserInfoForm/UserInfoForm";
import { YourBanksForm } from "../../components/YourBanksForm";
import { CheckboxSection } from "../../components/CheckboxSection";
import { RatingSection } from "../../components/RatingSection";
import { TextFieldSection } from "../../components/TextFieldSection";

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

        <CheckboxSection
          question="Používáte nějakou bankovní aplikaci?"
          checkboxes={[
            "Ano, používám ho pravidelně",
            "Někdy používám",
            "Nikdy jsem nepoužíval",
          ]}
        />

        <CheckboxSection
          question="Používáte nějakou bankovní aplikaci?"
          checkboxes={[
            "Ano, používám ho pravidelně",
            "Někdy používám",
            "Nikdy jsem nepoužíval",
          ]}
        />

        <CheckboxSection
          question="Jste spokojeni s pohodlím aplikace?"
          checkboxes={[
            "Spokojenost s aplikací",
            "Fungování aplikace je uspokojivé",
            "Nespokojenost s výkonem aplikace",
          ]}
        />

        <CheckboxSection
          question="Stává se vám často, že bankovní aplikace nefunguje správně?"
          checkboxes={[
            "Nesetkali jste se s žádnou chybnou funkcí aplikace",
            "Občas se v aplikaci vyskytnou drobné závady",
            "Aplikace často nefunguje správně",
          ]}
        />

        <RatingSection title={"Vyzkoušejte si přehlednost rozhraní aplikace"} />

        <CheckboxSection
          question="Zhodnoťte online podporu banky, pokud jste ji použili."
          checkboxes={[
            "Obecně uspokojivé",
            "Obecně neuspokojivé",
            "Nevyužil online podporu v bankovní aplikaci",
          ]}
        />

        <CheckboxSection
          question="Jak dlouho trvalo vyřešení vašeho problému s online podporou?"
          checkboxes={[
            "Vyřešení mého problému netrvalo dlouho",
            "Řešení mého problému trvalo déle, než jsem očekáva",
            "Online podpora nedokázala vyřešit můj problém",
            "Nevyužil online podporu v bankovní aplikaci",
          ]}
        />

        <TextFieldSection
          title={
            "Vaše přání ohledně bankovní aplikace a podpory v ní (nepovinné)"
          }
        />
        <Button className={style.submitBtn} variant="contained">
          Dále
        </Button>
      </Container>
    </>
  );
};
