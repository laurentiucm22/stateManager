import { createTheme } from "@mui/material/styles";
import { purple, indigo } from "@mui/material/colors";

const theme = createTheme({
  palette: {
    primary: {
      main: purple.A400,
    },
    secondary: {
      main: indigo[400],
    },
  },
});

export default theme;
