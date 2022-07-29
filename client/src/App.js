import Registration from "./views/Registration.jsx";
import Loginn from "./views/Loginn";
import Pre_Register from "./components/Pre_Register";
import Verify from "./views/Verify_otp";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

//  Defining my custom theme i.e color
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { LoginOutlined } from "@mui/icons-material";
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
// ****************************

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Routes>
          <Route path="/" element={<Loginn />} />
          <Route path="/hook" element={<Pre_Register />} />
          <Route path="/hook/check" element={<Verify />} />
          <Route path="/hook/data" element={<Registration />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
