import Registration from "./Pages/Registration.jsx";
import Loginn from "./Pages/Loginn";
import Pre_register from "./Pages/Pre_register"
import Verify from "./Pages/Verify_otp";


import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'

//  Defining my custom theme i.e color
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { LoginOutlined } from "@mui/icons-material";
const theme = createTheme({
  palette: {
    primary: {
      main: '#a70e13',
    },
    secondary: {
      main:'#a70e13' ,
    },
  },
});
// ****************************

function App() {
  return (
    <ThemeProvider theme={theme}>
    <Router>
      <Routes>
        <Route path='/' element={<Loginn/>}/>
        <Route path='/hook/data' element={<Registration/>}/>
        <Route path='/hook' element={<Pre_register/>}/>
        <Route path='/hook/check' element={<Verify/>}/>

      </Routes>
    </Router>
    </ThemeProvider>
  );
}

export default App;
