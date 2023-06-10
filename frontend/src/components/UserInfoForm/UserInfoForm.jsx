import { MenuItem, Paper, TextField } from "@mui/material";
import style from "./UserInfoForm.module.scss";

export const UserInfoForm = ({ register, errors, age, setAge }) => {
  const years = Array.from({ length: 100 }, (_, index) => index + 1);

  return (
    <Paper className={style.root} elevation={3}>
      <label htmlFor="email">Vaše emailová adresa *</label>
      <TextField
        className={style.input}
        id="email"
        label="E-mailem"
        variant="filled"
        error={Boolean(errors?.email)}
        helperText={errors?.email?.message}
        {...register("email", {
          required: "Toto pole je povinné",
          pattern: {
            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
            message: "Zadejte platnou emailovou adresu",
          },
        })}
      />

      <label htmlFor="userName">Vaše celé jméno *</label>
      <TextField
        className={style.input}
        id="userName"
        label="Název"
        variant="filled"
        error={Boolean(errors?.fullName)}
        helperText={errors?.fullName?.message}
        {...register("fullName", { required: "Toto pole je povinné" })}
      />

      <label className={style.age} htmlFor="userName">
        Váš věk *
      </label>
      <TextField
        className={style.select}
        select
        label="Věk"
        id="ageSelect"
        variant="filled"
        error={Boolean(errors?.age)}
        helperText={errors?.age?.message}
        {...register("age", { required: "Toto pole je povinné" })}
        value={age}
        onChange={(e) => setAge(e.target.value)}
      >
        {years.map((year) => (
          <MenuItem key={year} value={year}>
            {year}
          </MenuItem>
        ))}
      </TextField>
    </Paper>
  );
};
