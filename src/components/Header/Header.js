import React from "react";
import { AppBar, Grid } from "@material-ui/core";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";

const Header = () => {
  return (
    <React.Fragment>
      <AppBar>
        <Toolbar variant="dense">
          <Grid container  justify="center">
            <Typography variant="h5" color="inherit">
              Appointment Booking
            </Typography>
          </Grid>
        </Toolbar>
      </AppBar>
    </React.Fragment>
  );
};
export default Header;
