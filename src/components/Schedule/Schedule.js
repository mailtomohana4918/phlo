import React, { useState } from "react";
import Doctor from "../Doctor/Doctor";
import { makeStyles } from "@material-ui/core/styles";
import { Box, TextField, Button, Grid } from "@material-ui/core";
import emailjs from "emailjs-com";
import Header from "../Header/Header";
import Success from "../Success/Success";

const useStyles = makeStyles((theme) => ({
  doctor: {
    width: "280px",
  },
  textBoxContainer: {
    paddingTop: "45px",
    display: "flex",
  },
  boxContainer: {
    paddingTop: "40px",
  },
  butonContainer: {
    paddingTop: "40px",
    paddingLeft: "240px",
  },
  textField: {
    width: "400px",
  },
}));

const bst = new Date().toJSON().slice(0, 10).replace(/-/g, "-");

export default function Schedule() {
  const classes = useStyles();
  const [showModal, setShowModal] = useState(false);
  const [patientDetails, setPatientDetails] = useState({
    name: "",
    emailAddress: "",
    date: bst,
    time: "08:30",
    doctor: "",
  });

  const handleDoctorEntry = (value) => {
    setPatientDetails({
      ...patientDetails,
      doctor: value,
    });
  };

  const updateField = (e) => {
    setPatientDetails({
      ...patientDetails,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try{
    await emailjs
      .send(
        "gmail",
        "template_h2ylBlee",
        patientDetails,
        "user_wEOWDQL4XbYZXwuY0BZPC"
      )
      
          setShowModal(true);
      }
      catch(error)
      {
        throw new Error(`Error occurred while sending email ${error}`)
      }
       
  };

  const handleModalClose = () => {
    setShowModal(false);
    setPatientDetails({
      name: "",
      emailAddress: "",
      date: bst,
      time: "08:30",
      doctor: "",
    });
  };

  return (
    <Grid container justify="center">
      <form onSubmit={handleSubmit}>
        <Header />
        <Box className={classes.boxContainer}>
          <Box className={classes.textBoxContainer}>
            <Box className={classes.doctor} mr={2}>
              <Doctor updateDoctorName={handleDoctorEntry} />
            </Box>

            <Box>
              <TextField
                name="name"
                value={patientDetails.name}
                variant="outlined"
                placeholder="Name*"
                onChange={updateField}
                required
                className={classes.textField}
              />
            </Box>
          </Box>
          <Box className={classes.textBoxContainer}>
            <Box mr={2}>
              <TextField
                name="emailAddress"
                value={patientDetails.emailAddress}
                variant="outlined"
                placeholder="Email*"
                type="email"
                onChange={updateField}
                required
                className={classes.textField}
              />
            </Box>

            <Box>
              <TextField
                label="Appointment Date"
                type="date"
                name="date"
                onChange={updateField}
                defaultValue={patientDetails.date}
                InputProps={{ inputProps: { min: patientDetails.date } }}
                InputLabelProps={{
                  shrink: true,
                }}
                required
              />
              <TextField
                label="Time"
                type="time"
                name="time"
                onChange={updateField}
                defaultValue={patientDetails.time}
                InputProps={{ inputProps: { min: "08:30", max: "18:00" } }}
                InputLabelProps={{
                  shrink: true,
                }}
                inputProps={{
                  step: 300,
                }}
                required
              />
            </Box>
          </Box>
          <Box className={classes.butonContainer}>
            <Button type="submit" color="primary" variant="contained" data-testid="schedule-button">
              Schedule
            </Button>
          </Box>
        </Box>
      </form>
      {showModal && <Success handleClose={handleModalClose} />}
    </Grid>
  );
}
