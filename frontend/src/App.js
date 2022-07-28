import Registration from "./Pages/Registration.jsx";
import Loginn from "./Pages/Loginn";
import Profile from "./Pages/Profile"
import Chat from "./Pages/Chat"

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
        <Route path='/reg' element={<Registration/>}/>
        <Route path='/Profile' element={<Profile/>}/>
        <Route path='/chat' element={<Chat/>}/>
      </Routes>
    </Router>
    </ThemeProvider>
  );
}

export default App;
