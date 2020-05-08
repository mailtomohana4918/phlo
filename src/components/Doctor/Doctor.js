import React from "react";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";

const nearByDoctors = [
  "Dr. Finlay",
  "Dr. Edward George Armstrong",
  "Dr. Charles Burton",
  "Dr. Mark Hall",
  "Dr. Peter Leavitt",
  "Dr. Jeremy Stone",
  "Dr. Martin Arrowsmith",
];

export default function Doctor(props) {
  return (
    <Autocomplete
    freeSolo
      onChange={(event, value) => props.updateDoctorName(value)}
      options={nearByDoctors}
      renderInput={(params) => (
        <TextField {...params} label="Near by doctors" variant="outlined" required/>
      )}
    />
  );
}
