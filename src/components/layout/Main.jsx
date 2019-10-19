import React, { useState } from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import clsx from "clsx";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import MenuItem from "@material-ui/core/MenuItem";

import Button from "@material-ui/core/Button";

import ReactPage from "../pages/ReactPage";
import CplusplusPage from "../pages/C++Page";

const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex"
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    })
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen
    })
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  hide: {
    display: "none"
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: "nowrap"
  },
  drawerOpen: {
    width: drawerWidth,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen
    })
  },
  drawerClose: {
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    }),
    overflowX: "hidden",
    width: theme.spacing(7) + 1,
    [theme.breakpoints.up("sm")]: {
      width: theme.spacing(9) + 1
    }
  },
  toolbar: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3)
  }
}));

export default function MiniDrawer() {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = useState(false);
  const [itemSelected, setItemSelected] = useState("");
  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const handleClick = e => {
    setItemSelected(e);
    console.log(e);
  };

  return (
    <Router>
      <div className={classes.root}>
        <CssBaseline />
        <AppBar
          position="fixed"
          className={clsx(classes.appBar, {
            [classes.appBarShift]: open
          })}
        >
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={handleDrawerOpen}
              edge="start"
              className={clsx(classes.menuButton, {
                [classes.hide]: open
              })}
            >
              <MenuIcon />
            </IconButton>
            <div
              style={{
                position: "absolute",
                left: "50%"
              }}
            >
              <Link to="/um-meg" style={{ textDecoration: "none" }}>
                <img
                  onClick={() => {
                    handleClick("Um meg");
                  }}
                  style={{ height: "24px", width: "24px", marginRight: "25px" }}
                  src={require("../../img/aboutMe.png")}
                />
              </Link>
              <Link to="/lesnaður" style={{ textDecoration: "none" }}>
                <img
                  onClick={() => {
                    handleClick("study");
                  }}
                  style={{ height: "24px", width: "24px", marginRight: "25px" }}
                  src={require("../../img/study.png")}
                />
              </Link>{" "}
              <Link to="/arbeiðsroyndir" style={{ textDecoration: "none" }}>
                <img
                  onClick={() => {
                    handleClick("work");
                  }}
                  style={{ height: "24px", width: "24px", marginRight: "25px" }}
                  src={require("../../img/work.png")}
                />
              </Link>
              <Link to="/samband" style={{ textDecoration: "none" }}>
                <img
                  onClick={() => {
                    handleClick("contact");
                  }}
                  style={{ height: "24px", width: "24px" }}
                  src={require("../../img/contact.png")}
                />
              </Link>
            </div>

            <Typography variant="h6" noWrap>
              {itemSelected}
            </Typography>
          </Toolbar>
        </AppBar>
        <Drawer
          variant="permanent"
          className={clsx(classes.drawer, {
            [classes.drawerOpen]: open,
            [classes.drawerClose]: !open
          })}
          classes={{
            paper: clsx({
              [classes.drawerOpen]: open,
              [classes.drawerClose]: !open
            })
          }}
          open={open}
        >
          <div className={classes.toolbar}>
            Projects
            <IconButton onClick={handleDrawerClose}>
              {theme.direction === "rtl" ? (
                <ChevronRightIcon />
              ) : (
                <ChevronLeftIcon />
              )}
            </IconButton>
          </div>
          <Divider />
          <Link to="/react" style={{ textDecoration: "none" }}>
            <MenuItem
              onClick={() => {
                handleClick("React");
              }}
            >
              <ListItemIcon>
                <img
                  style={{ height: "24px", width: "24px" }}
                  src={require("../../img/react.png")}
                />
              </ListItemIcon>
              <div variant="inherit">React</div>
            </MenuItem>
          </Link>
          <Link to="/c++" style={{ textDecoration: "none" }}>
            <MenuItem
              onClick={() => {
                handleClick("C++");
              }}
            >
              <ListItemIcon>
                <img
                  style={{ height: "24px", width: "24px" }}
                  src={require("../../img/c++.png")}
                />
              </ListItemIcon>
              <Typography variant="inherit">C++</Typography>
            </MenuItem>
          </Link>
          <MenuItem
            onClick={() => {
              handleClick("Shell Script");
            }}
          >
            {" "}
            <ListItemIcon>
              <img
                style={{ height: "24px", width: "24px" }}
                src={require("../../img/sh.png")}
              />
            </ListItemIcon>
            <Typography component={"span"} variant="inherit" noWrap>
              Shell Scripts
            </Typography>
          </MenuItem>
          <MenuItem
            onClick={() => {
              handleClick("Android Studio");
            }}
          >
            {" "}
            <ListItemIcon>
              <img
                style={{ height: "24px", width: "24px" }}
                src={require("../../img/androidStudio.png")}
              />
            </ListItemIcon>
            <Typography component={"span"} variant="inherit" noWrap>
              Android Studio
            </Typography>
          </MenuItem>
          <MenuItem
            onClick={() => {
              handleClick("Arduino");
            }}
          >
            {" "}
            <ListItemIcon>
              <img
                style={{ height: "24px", width: "24px" }}
                src={require("../../img/arduino.png")}
              />
            </ListItemIcon>
            <Typography component={"span"} variant="inherit" noWrap>
              Arduino
            </Typography>
          </MenuItem>
        </Drawer>
        <Switch>
          <main className={classes.content}>
            <div className={classes.toolbar} />
            <Route exact path="/react" component={ReactPage}></Route>
            <Route exact path="/c++" component={CplusplusPage}></Route>
          </main>
        </Switch>
      </div>
    </Router>
  );
}
