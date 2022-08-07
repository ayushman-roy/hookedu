import Login from "./views/Home";
import Register from "./views/Register";
import Feed from "./views/Feed";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { createTheme, ThemeProvider } from "@mui/material/styles";

// Custom Theme & Color
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
          <Route path="/" element={<Login />} />
          <Route path="/hook" element={<Register />} />
          <Route path="/feed" element={<Feed />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
