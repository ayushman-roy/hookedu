import React, { useState } from "react";
import  TextField  from '@mui/material/TextField';
import   Radio  from '@mui/material/Radio';
import  FormControlLabel  from '@mui/material/FormControlLabel';

export default function OtherInput() {

  const [ checked, setChecked ] = useState(false);

  const [ otherInfo, setOtherInfo ] = useState('');

  return (
    <div>
      <h1>"Other" Radio Input with Hook:</h1>
      <h2>Checked: {checked.toString()} </h2>
      <h2>Input result: {otherInfo} </h2>
      <FormControlLabel
          control={
            <Radio
            checked={checked}
            onClick={() => setChecked(!checked)}
            value="other"
            color='primary'
            label='other'/>
          }
          label={
            checked ?
              <TextField
                disabled={!checked}
                label="Please Specify"
                onKeyDown={(e) => setOtherInfo(e.target.value)}/>
            : 'Other'
          }/>

    </div>
  );
}
