import { Paper, TextField } from "@mui/material";

export const TextFieldSection = ({ title, wishes, setWishes }) => {
  return (
    <Paper className="section" elevation={3}>
      <span className="title">{title}</span>
      <TextField
        id="standard-basic"
        label="Má odpověď"
        variant="standard"
        value={wishes}
        onChange={(e) => setWishes(e.target.value)}
      />
    </Paper>
  );
};
