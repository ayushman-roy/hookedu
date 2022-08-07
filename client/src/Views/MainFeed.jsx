import React from 'react'
import Console from './Console'
import Rightbar from './Rightbar'
import Sidebar from './Sidebar'

import { Stack, Box } from '@mui/material'
const MainFeed = () => {
  return (
    <Box
    sx={{
        p:'0px',
        m:'0px',
    }}
    >
    <Box sx={{
        display:'flex',
        justifyContent:"space-between",
        p:'0px',
        m:'0px',
    }}>
        <Sidebar/>
        <Console/>
        <Rightbar/>
    </Box>
    </Box>
  )
}

export default MainFeed