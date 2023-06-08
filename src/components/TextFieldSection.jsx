import { Paper, TextField } from "@mui/material";

export const TextFieldSection = ({ title }) => {
  return (
    <Paper className="section" elevation={3}>
      <span className="title">{title}</span>
      <TextField id="standard-basic" label="Má odpověď" variant="standard" />
    </Paper>
  );
};
