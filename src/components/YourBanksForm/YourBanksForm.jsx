import { Checkbox, FormControlLabel, Paper } from "@mui/material";
import style from "./YourBanksForm.module.scss";

export const YourBanksForm = () => {
  const handleChange = () => {};

  const banks = [
    "Česká spořitelna",
    "mBank",
    "ČSOB",
    "Air Bank",
    "Raiffeisenbank",
    "Komerční banka",
    "MONETA Money Bank",
    "Fio banka",
    "UniCredit Bank",
    "Neexistuje žádná správná možnost",
  ];
  return (
    <Paper className={style.root} elevation={3}>
      <span className={style.question}>
        Kterého bankovního klienta využíváte nebo využíváte nejčastěji, pokud
        jste klientem více než jedné banky?
      </span>
      {banks.map((bank, index) => (
        <FormControlLabel
          key={index}
          control={<Checkbox onChange={handleChange} name={bank} />}
          label={bank}
        />
      ))}
    </Paper>
  );
};
