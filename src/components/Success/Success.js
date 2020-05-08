import React from "react";
import { Box, Typography, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  success: {
    position: "absolute",
    width: "100%",
    height: "100%",
    top: "0",
    left: "0",
    right: "0",
    bottom: "0",
    margin: "auto",
    backgroundColor: "rgba(0,0,0, 0.5)",
  },
  successInner: {
    position: "absolute",
    left: "25%",
    right: "25%",
    top: "50%",
    bottom: "50%",
    margin: "auto",
  },
}));
const Success = (props) => { 
  const classes = useStyles();
  return (
    <div className={classes.success}>
      <div className={classes.successInner}>
        <Box textAlign="center">
          <Typography>
            Booking successful ! You will receive email confirmation
          </Typography>
          <Button type="submit" color="secondary" variant="contained" onClick={props.handleClose}>
            Close
          </Button>
        </Box>
      </div>
    </div>
  );
};

export default Success;
