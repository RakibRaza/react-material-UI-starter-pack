import { Link, makeStyles, Typography } from "@material-ui/core";
import React from "react";

const useStyles = makeStyles((theme) => ({
  footer: {
    background: theme.palette.secondary.main,
    padding: theme.spacing(6),
    color: theme.palette.grey[50],
  },
}));
function Copyright() {
  return (
    <Typography variant="body2" color="inherit" align="center">
      {"Copyright © "}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}
const Footer = () => {
  const classes = useStyles();
  return (
    <footer className={classes.footer}>
      <Typography variant="h6" align="center" gutterBottom>
        Footer
      </Typography>
      <Typography variant="subtitle1" align="center" component="p">
        Something here to give the footer a purpose!
      </Typography>
      <Copyright />
    </footer>
  );
};

export default Footer;
