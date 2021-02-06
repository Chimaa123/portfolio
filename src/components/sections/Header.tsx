import React from "react";
import { Link } from "react-router-dom";
import { AppBar, Toolbar } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const Header = () => {
  const classes = useStyles();
  const menus = [
    { label: "About", code: "about" },
    { label: "Summary", code: "summary" },
    { label: "Detail", code: "detail" },
    { label: "Contact", code: "contact" },
  ];
  return (
    <React.Fragment>
      <AppBar position={"relative"}>
        <Toolbar className={classes.root}>
          {menus.map((item, index) => (
            <Link
              to={"/portfolio/#section" + index}
              key={"header" + index}
              className={classes.item}
            >
              {item.label}
            </Link>
          ))}
        </Toolbar>
      </AppBar>
    </React.Fragment>
  );
};
const useStyles = makeStyles({
  root: {
    background: "transparent",
    marginLeft: "auto",
  },
  item: {
    fontSize: 15,
    fontWeight: "bold",
    color: "white",
    textDecoration: "none",
    padding: 10,
  },
});
export default Header;
