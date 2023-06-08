import { Paper, Rating } from "@mui/material";
import React, { useState } from "react";

export const RatingSection = ({ title }) => {
  const [value, setValue] = useState("");

  return (
    <Paper className="section" elevation={3}>
      <span className="title">{title}</span>
      <Rating
        name="simple-controlled"
        size="large"
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      />
    </Paper>
  );
};
