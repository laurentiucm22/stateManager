import { createTheme } from "@mui/material/styles";
import { indigo, green, lightGreen } from "@mui/material/colors";

const theme = createTheme({
  palette: {
    primary: {
      main: lightGreen[600],
    },
    secondary: {
      main: indigo[400],
    },
  },
});

export default theme;
