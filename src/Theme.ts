import { createMuiTheme } from "@material-ui/core";

export const grey21 = "#101010";
export const grey32 = "#323232";
export const greycb = "#cbcbcb";
export const greyeb = "#ebebeb";
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
