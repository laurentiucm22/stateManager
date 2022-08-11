import { CssBaseline } from "@mui/material";
import "./App.css";
import CounterPage from "./pages/CounterPage";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./utilities/theme";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <CounterPage />
    </ThemeProvider>
  );
};

export default App;
