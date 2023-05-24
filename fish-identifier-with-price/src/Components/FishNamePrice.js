import { Stack, Typography } from '@mui/material';
import React from 'react';


function FishNamePrice({name, price}) {
    const uppercaseName = name.toUpperCase();
    
  return (
    <Stack direction="column" justifyContent="center" alignItems="center">
        <Typography variant="h3" fontFamily="Montserrat, sans-serif" color="#56caef">
            Seafood Name:
        </Typography>
        <Typography variant="h2" fontFamily="Montserrat Black, sans-serif" color="#56caef">
            {uppercaseName ? uppercaseName : "NO IMAGE FOUND"}
        </Typography>
        <Typography variant="h3" fontFamily="Montserrat, sans-serif" color="#56caef">
            Seafood Price (PHP/KG):
        </Typography>
        <Typography variant="h2" fontFamily="Montserrat Black, sans-serif" color="#56caef">
            {price? price : "NO IMAGE FOUND"}
        </Typography>
    </Stack>
  )
}

export default FishNamePrice