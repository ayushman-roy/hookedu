import React from 'react'
import { Box } from '@mui/material'

export default function Sidebar () {
  return (
    <div>
        <Box
        sx={{display:'flex',
             display :{ xs: "none", sm:"block"}
            }}
            bgcolor="skyblue"
            flex={1}
            p={2}
            
        >
           Sidebar 
        </Box>
    </div>
  )
}

