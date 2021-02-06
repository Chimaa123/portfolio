import { createMuiTheme } from "@material-ui/core";

export const grey21 = "#212121";
export default createMuiTheme({
  palette: {
    primary: {
      main: grey21,
      contrastText: "#fff",
    },
    text: {
      primary: "#000",
      disabled: "#969696",
    },
    background: {
      default: "#fff",
    },
  },
});
