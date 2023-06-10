import { Checkbox, FormControlLabel, Paper } from "@mui/material";

export const YourBanksForm = ({ onChange }) => {
  const handleChange = (event) => {
    const { name, checked } = event.target;
    if (checked) {
      onChange((prevSelectedBanks) => [...prevSelectedBanks, name]);
    } else {
      onChange((prevSelectedBanks) =>
        prevSelectedBanks.filter((bank) => bank !== name)
      );
    }
  };

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
    <Paper className="section" elevation={3}>
      <span className="title">
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
