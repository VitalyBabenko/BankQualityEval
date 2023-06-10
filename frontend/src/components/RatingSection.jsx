import { Paper, Rating } from "@mui/material";
import React, { useState } from "react";

export const RatingSection = ({ title, rating, setRating }) => {
  return (
    <Paper className="section" elevation={3}>
      <span className="title">{title}</span>
      <Rating
        name="simple-controlled"
        size="large"
        value={rating}
        onChange={(event, newValue) => {
          setRating(newValue);
        }}
      />
    </Paper>
  );
};
