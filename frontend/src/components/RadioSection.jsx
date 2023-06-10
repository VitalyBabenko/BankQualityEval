import {
  Button,
  FormControl,
  FormControlLabel,
  FormLabel,
  Paper,
  Radio,
  RadioGroup,
} from "@mui/material";

export const RadioSection = ({ onChange, question, variants }) => {
  return (
    <Paper className="section" elevation={3}>
      <FormControl>
        <FormLabel className="title" id="radio-group">
          {question}
        </FormLabel>
        <RadioGroup aria-labelledby="radio-group" name={question}>
          {variants.map((variant) => (
            <FormControlLabel
              key={variant}
              onChange={onChange}
              value={variant}
              control={<Radio />}
              label={variant}
            />
          ))}
        </RadioGroup>
      </FormControl>
    </Paper>
  );
};
