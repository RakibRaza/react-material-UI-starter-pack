import {
  AppBar,
  Button,
  Container,
  Hidden,
  IconButton,
  makeStyles,
  Menu,
  MenuItem,
  Toolbar,
  Typography,
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import React, { useState } from "react";
import Scroll from "../Scroll/Scroll";
import { Link } from "react-router-dom";
const useStyles = makeStyles((theme) => ({}));

const NavBar = () => {
  const classes = useStyles();

  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

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
              <IconButton onClick={handleClick} color="inherit">
                <MenuIcon />
              </IconButton>
              <Menu
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                onClose={handleClose}
              >
                <MenuItem onClick={handleClose}>Home</MenuItem>
                <MenuItem onClick={handleClose}>About</MenuItem>
                <MenuItem onClick={handleClose}>Contact</MenuItem>
              </Menu>
            </Hidden>
          </Toolbar>

          <Scroll showBelow={250} />
        </Container>
      </AppBar>
    </>
  );
};

export default NavBar;
