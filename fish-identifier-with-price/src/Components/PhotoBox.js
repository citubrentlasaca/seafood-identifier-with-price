import React, { useState, useRef } from 'react';
import { Box, Stack, Button } from '@mui/material';

function PhotoBox({ onFileUpload }) {
  const [file, setFile] = useState(null);
  const fileInputRef = useRef(null);

  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];
    setFile(selectedFile);
    onFileUpload(selectedFile.name); // Pass the selected file name to the onFileUpload prop
  };

  const handleButtonClick = () => {
    fileInputRef.current.click();
    onFileUpload(file ? file.name : ''); // Pass the file name (or empty string) to the onFileUpload prop
  };

  const boxStyle = {
    width: "400px",
    height: "400px",
    border: "10px solid #56caef",
    borderRadius: "10px",
    backgroundImage: file ? `url(${URL.createObjectURL(file)})` : 'none',
    backgroundColor: file ? 'transparent' : '#56caef',
    backgroundSize: "cover",
    backgroundPosition: "center"
  };
  
  return (
    <Stack direction="column" justifyContent="center" alignItems="center" spacing={1}>
      <input
        type="file"
        accept="image/*"
        ref={fileInputRef}
        style={{ display: "none" }}
        onChange={handleFileChange}
      />
      <Button
        variant="contained"
        onClick={handleButtonClick}
        sx={{
          fontFamily: "Montserrat, sans-serif",
          backgroundColor: "#56caef",
          color: "#1F4284",
          '&:hover': {
            backgroundColor: "#56caef",
            color: "#1F4284",
          },
        }}
      >
        Upload Seafood Image
      </Button>
      <Box sx={boxStyle} />
    </Stack>
  );
}

export default PhotoBox;