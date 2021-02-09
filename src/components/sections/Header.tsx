import React from "react";
import { AppBar, Toolbar } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

export const HEADER_HEIGHT = 0;
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
      <AppBar position={"fixed"} className={classes.root}>
        <Toolbar className={classes.root}>
          {menus.map((item, index) => (
            <a
              href={"/portfolio/#section" + index}
              key={"header" + index}
              className={classes.item}
            >
              {item.label}
            </a>
          ))}
        </Toolbar>
      </AppBar>
    </React.Fragment>
  );
};
const useStyles = makeStyles({
  root: {
    height: HEADER_HEIGHT,
    background: "transparent",
    marginLeft: "auto",
  },
  item: {
    fontSize: 15,
    fontWeight: "bold",
    color: "#cbcbcb",
    textDecoration: "none",
    padding: 10,
  },
});
export default Header;
