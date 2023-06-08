import {
  Button,
  FormControl,
  FormControlLabel,
  FormLabel,
  Paper,
  Radio,
  RadioGroup,
} from "@mui/material";

export const CheckboxSection = ({ question, checkboxes }) => {
  return (
    <Paper className="section" elevation={3}>
      <FormControl>
        <FormLabel className="title" id="radio-group">
          {question}
        </FormLabel>
        <RadioGroup aria-labelledby="radio-group" name="radio-buttons-group">
          {checkboxes.map((checkbox) => (
            <FormControlLabel
              key={checkbox}
              value={checkbox}
              control={<Radio />}
              label={checkbox}
            />
          ))}
        </RadioGroup>
        <Button size="small">zrušit výběr</Button>
      </FormControl>
    </Paper>
  );
};
