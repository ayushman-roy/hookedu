import React from 'react'
import PersonSearchIcon from '@mui/icons-material/PersonSearch';
import IconButton from "@mui/material/IconButton";
import { Box} from "@mui/system";

export default function Searchbtn (){
  return (
    <div>
        <Box sx={{
            p:0,
            m:0,
            position:"fixed",
            bottom:"10vh",
            right:"4vw",
        }}
        >
            <IconButton sx={{p:1,m:0, backgroundColor:"#a70e13", }} href="/match">
                <PersonSearchIcon color="white" sx={{fontSize:"30px"}}/>
            </IconButton>
        </Box>
    </div>
  )
}
