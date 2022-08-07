import React from 'react'
import { Box } from '@mui/material'

export default function Rightbar () {
  return (
    <div 
    sx={{
        p:'0px',
        m:'0px',
    }}
    >
    <Box 
    sx={{display:'flex',
    display :{ xs: "none", sm:"block"}
    
   }}
   bgcolor="yellow"
   p={2}
    >
        RIGHTBAR MAN 
    </Box>
    </div>
  )
}

