// import React, { Component } from 'react'
import Registration from "./Pages/Registration";
import Loginn from "./Pages/Loginn";
import Login from "./Pages/Login";
import {Route, Link} from 'react-router-dom'

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
    <Loginn/>
    {/* <Route path="/" component={Registration}/>
    <Route path="/reg" component={Registration}/>
    <Route path="/Loginn" component={Loginn}/> */}
    
     <Registration/>
    </ThemeProvider>
  );
}

export default App;
