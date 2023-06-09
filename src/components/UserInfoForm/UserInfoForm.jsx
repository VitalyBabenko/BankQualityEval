import {
  FormControl,
  InputLabel,
  MenuItem,
  Paper,
  Select,
  TextField,
} from "@mui/material";
import style from "./UserInfoForm.module.scss";

export const UserInfoForm = ({ register, age, setAge }) => {
  const years = Array.from({ length: 100 }, (_, index) => index + 1);

  return (
    <Paper className={style.root} elevation={3}>
      <label htmlFor="email">Vaše emailová adresa *</label>
      <TextField
        className={style.input}
        id="email"
        label="E-mailem"
        variant="filled"
        {...register("email", { require: true })}
      />

      <label htmlFor="userName">Vaše celé jméno *</label>
      <TextField
        className={style.input}
        id="userName"
        label="Název"
        variant="filled"
        {...register("fullName", { require: true })}
      />

      <label className={style.age} htmlFor="userName">
        Váš věk *
      </label>

      <FormControl variant="filled">
        <InputLabel id="ageSelect">Věk</InputLabel>
        <Select
          className={style.select}
          labelId="ageSelect"
          id="ageSelect"
          value={age}
          onChange={(e) => setAge(e.target.value)}
        >
          {years.map((year) => (
            <MenuItem key={year} value={year}>
              {year}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Paper>
  );
};
