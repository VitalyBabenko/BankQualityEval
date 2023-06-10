import { Paper } from "@mui/material";

export const FormTitle = () => {
  return (
    <Paper className="formTitle" elevation={3}>
      <h2>
        Státní statistické zjišťování kvality služeb bank v České republice
      </h2>
      <p>
        Shromažďuje informace za účelem zlepšení bankovních služeb a podpory. Po
        odpovědi můžete získat bonus na svůj účet v jedné z bank, jejichž jste
        klientem.
      </p>
    </Paper>
  );
};
