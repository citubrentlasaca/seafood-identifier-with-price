import React, { useState } from 'react';
import PhotoBox from './PhotoBox';
import { Box, Stack, Typography } from '@mui/material';
import FishNamePrice from './FishNamePrice';
import bg from '../Images/BG.jpg'
import axios from 'axios';

function MainScreen() {
  const [fileName, setFileName] = useState('');
  const [imageUploaded, setImageUploaded] = useState(false);
  const [seafoodName, setSeafoodName] = useState('');
  const [seafoodPrice, setSeafoodPrice] = useState('');

  const handleFileUpload = async (name) => {
    setFileName(name);
    const filePath = `C:\\Users\\User\\Documents\\School\\3rd Year 2nd Semester\\CS346 IS2\\Week 16 (May 7, 2023)\\fish-identifier-with-price-application\\fish-identifier-with-price\\src\\Images\\${name}`
    if (name !== '') {
      setImageUploaded(true);
      try {
        const response = await axios.post(`https://localhost:52799/predict/${encodeURIComponent(filePath)}`);
        const predictedLabel = response.data.predictedLabel;
        const secondResponse = await axios.post('https://localhost:52805/predict', { col0: predictedLabel });
        switch (predictedLabel) {
            case '0':
                setSeafoodName("Black Sea Sprat")
                setSeafoodPrice("N/A");
                break;
            case '1':
                setSeafoodName("Gilt-Head Bream")
                setSeafoodPrice("N/A");
                break;
            case '2':
                setSeafoodName("Horse Mackerel")
                setSeafoodPrice("N/A");
                break;
            case '3':
                setSeafoodName("Salmonete")
                setSeafoodPrice("₱" + parseFloat(secondResponse.data.score).toFixed(0));
                break;
            case '4':
                setSeafoodName("Red Sea Bream")
                setSeafoodPrice("N/A");
                break;
            case '5':
                setSeafoodName("Apahap")
                setSeafoodPrice("₱" + parseFloat(secondResponse.data.score).toFixed(0));
                break;
            case '6':
                setSeafoodName("Hipon")
                setSeafoodPrice("₱" + parseFloat(secondResponse.data.score).toFixed(0));
                break;
            case '7':
                setSeafoodName("Salmonete")
                setSeafoodPrice("₱" + parseFloat(secondResponse.data.score).toFixed(0));
                break;
            case '8':
                setSeafoodName("Trout")
                setSeafoodPrice("N/A");
                break;
            default:
                setSeafoodName("Unknown")
                setSeafoodPrice("N/A");
          }
          
      } catch (error) {
        // Handle error if the request fails
        console.error(error);
      }
    }
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        backgroundImage: `url(${bg})`,
        backgroundSize: "cover",
      }}
    >
      <Typography variant="h2" fontFamily="Montserrat Black, sans-serif" color="#1F4284">
        SEAFOOD IDENTIFIER WITH PRICE
      </Typography>
      <Box
        sx={{
          backgroundColor: "#1F4284",
          borderRadius: "10px",
          width: "80%",
          height: "70%",
          marginTop: "20px",
        }}
      >
        <Stack
          direction="row"
          justifyContent="center"
          alignItems="center"
          spacing={10}
          style={{
            width: "100%",
            height: "100%",
          }}
        >
          <PhotoBox onFileUpload={handleFileUpload} />
          <FishNamePrice name={seafoodName} price={seafoodPrice} />
        </Stack>
      </Box>
    </Box>
  );
}

export default MainScreen;
