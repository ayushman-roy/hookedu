import Loginn from "./views/Loginn";
import Register from "./components/Register";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { createTheme, ThemeProvider } from "@mui/material/styles";

// custom theme and color
const theme = createTheme({
  palette: {
    primary: {
      main: "#a70e13",
    },
    secondary: {
      main: "#a70e13",
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Routes>
          <Route path="/" element={<Loginn />} />
          <Route path="/hook" element={<Register />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
