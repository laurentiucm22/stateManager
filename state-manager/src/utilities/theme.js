import { createTheme } from "@mui/material/styles";
import { purple } from "@mui/material/colors";

const theme = createTheme({
  palette: {
    primary: {
      main: purple[600],
      bgClr: "#5965b2",
    },
    secondary: {
      main: "#1565c0",
      txtClr: "#FFF",
    },
  },
});

export default theme;
