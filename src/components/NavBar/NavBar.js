import {
  AppBar,
  Button,
  Container,
  Toolbar,
  Typography,
} from "@material-ui/core";
import React from "react";

const NavBar = () => {
  return (
    <AppBar>
      <Container>
        <Toolbar>
          <Typography style={{ flexGrow: 1 }} variant="h5">
            Material UI
          </Typography>
          <Button color="inherit">Home</Button>
          <Button color="inherit">About</Button>
          <Button color="inherit">Contact</Button>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default NavBar;
