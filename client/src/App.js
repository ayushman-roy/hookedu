// Basic structure imports by roy
// import Login from "./components/Home";
import Register from "./components/Register";
// import Feed from "./components/Feed";

// Designed pages following the structure provided 
// import Regdata from "./Views/Regdata";
import MainFeed from "./Views/MainFeed";
import Login from "./Views/Login";
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
          {/* <Route path="/" element={<Login />} /> */}
          <Route path="/hook" element={<Register />} />
          {/* <Route path="/feed" element={<Feed />} /> */}
          <Route path="/" element={<Login />} />
          {/* <Route path="/hook" element={<Regdata />} /> */}
          <Route path="/feed" element={<MainFeed />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
