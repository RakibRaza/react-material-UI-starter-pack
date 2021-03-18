import {
  AppBar,
  Box,
  Button,
  Container,
  Drawer,
  Hidden,
  IconButton,
  List,
  ListItem,
  ListItemText,
  makeStyles,
  Toolbar,
  Typography,
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import React, { useState } from "react";

import { Link } from "react-router-dom";
import ScrollToTop from "../ScrollToTop/ScrollToTop";
const useStyles = makeStyles((theme) => ({
  drawer: {
    width: "250px",
  },
}));

const NavBar = () => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);

  return (
    <>
      <AppBar position="static" color="secondary">
        <Container>
          <Toolbar>
            <Typography style={{ flexGrow: 1 }} variant="h5">
              BBC News
            </Typography>
            <Hidden smDown>
              <Button component={Link} to="/" color="inherit">
                Home
              </Button>
              <Button component={Link} to="/about" color="inherit">
                About
              </Button>
              <Button color="inherit">Contact</Button>
            </Hidden>
            <Hidden mdUp>
              <Box>
                <IconButton onClick={() => setOpen(true)} color="inherit">
                  <MenuIcon />
                </IconButton>
              </Box>
              <Drawer open={open} onClose={() => setOpen(false)}>
                <List disablePadding className={classes.drawer}>
                  <ListItem button>
                    <ListItemText primary="News" />
                  </ListItem>
                  <ListItem button>
                    <ListItemText primary="Destination" />
                  </ListItem>
                  <ListItem button>
                    <ListItemText primary="Blog" />
                  </ListItem>
                  <ListItem button>
                    <ListItemText primary="Contact" />
                  </ListItem>
                </List>
              </Drawer>
            </Hidden>
          </Toolbar>

          <ScrollToTop showBelow={250} />
        </Container>
      </AppBar>
    </>
  );
};

export default NavBar;
