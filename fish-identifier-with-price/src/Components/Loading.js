import React from 'react';
import fishing from '../Images/Fishing.gif';
import { Stack } from '@mui/material';

function Loading() {
  return (
    <Stack justifyContent="center" alignItems="center"
        sx={{
            backgroundColor:"#1F4284",
            width: "100%",
            height: "100%"
        }}
    >
        <img src={fishing}
            style={{
                height: "50%"
            }}
        />
    </Stack>
  )
}

export default Loading