import { CssBaseline } from "@mui/material";
import "./App.css";
import CounterPage from "./pages/CounterPage";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./utilities/theme";
import GlobalState from "./state/GlobalState";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <GlobalState />
      <CounterPage />
    </ThemeProvider>
  );
};

export default App;
