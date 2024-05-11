import React from "react";
import background from "./sleep_Cat1.png";
import { createSvgIcon } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import IconButton from '@mui/material/IconButton';
    




export default function GeneralPage() {
    const navigate = useNavigate();

    const handleBackClick = () => {
        navigate(-1);
    };

  const ArrowLeftTwoTone = createSvgIcon(
    <path d="m14 7-5 5 5 5z" />,
    'ArrowLeftTwoTone'
  );

  return (


    <div
      style={{
        backgroundImage: `url(${background})`,
        width: "100vw",
        height: "100vh",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
    <IconButton
        sx={{
          background: 'rgba(0,0,0,0.5)',
          color: 'white',
          borderRadius: '20px',
          left: "97%",
          '&:hover': {
            background: 'rgba(0,0,0,0.7)',
          },
        }}
        onClick={handleBackClick}>
        <ArrowLeftTwoTone />
    </IconButton>

    <div style={{position: "fixed", top: "45%", left:"45%"}}>
    <h1 style={{fontSize:"50px", color:"black"}}>202</h1>
    </div>


    </div>

        


  );
}