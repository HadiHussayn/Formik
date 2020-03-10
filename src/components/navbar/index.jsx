import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Link from "next/link";
import InputBase from "@material-ui/core/InputBase";
import { fade, makeStyles } from "@material-ui/core/styles";
import { withStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },

  search: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: fade(theme.palette.common.white, 0.25)
    },

    navGroup: {
      display: "none",
      justifyContent: "center"
    },
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(1),
      width: "auto"
    }
  },
  searchIcon: {
    width: theme.spacing(7),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },
  inputRoot: {
    color: "inherit"
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 7),
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: 120,
      "&:focus": {
        width: 200
      }
    }
  }
}));


// const nvaItems =['Home', 'About', 'Contect' ]
const Navbar = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar display="flex" position="static">
        <Toolbar
          classes={{
            root: classes.inputRoot,
            input: classes.inputInput
          }}
        >
          <ul style={{listStyleType: 'none',}}>
            {/* {
              nvaItems.map((item => {
                return(
                  <li>{item}</li>
                )
              }))
            } */}
            <li>
              <Link href="/">
                <a style={{color: "#ffff", textDecoration: 'none'}}>Home</a>
              </Link>
            </li>

            <li >
              <Link href="/contect">
                <a style={{color: "#ffff" , textDecoration: 'none'}}>contect</a>
              </Link>
            </li>
          </ul>
          <div className={classes.search}>
            <InputBase
              placeholder="Search…"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput
              }}
              inputProps={{ "aria-label": "search" }}
            />
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Navbar;
