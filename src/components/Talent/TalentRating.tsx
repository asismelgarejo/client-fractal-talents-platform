"use client";
import { Rating } from "@mui/material";
import { useState } from "react";

export const TalentRating = () => {
  const [value, setValue] = useState<number | null>(2);
  return (
    <Rating
      name="simple-controlled"
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
      }}
    />
  );
};

export default TalentRating;
