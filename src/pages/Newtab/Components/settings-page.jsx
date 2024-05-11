
import React from 'react';
import { useNavigate } from 'react-router-dom';
import IconButton from '@mui/material/IconButton';
import { createSvgIcon } from '@mui/material';
import { Link } from 'react-router-dom';
import backgroundImage from "./kitten-sleeping-8.jpg";

import { SettingsTwoTone } from '@mui/icons-material';
import { PersonTwoTone } from '@mui/icons-material';
import { ColorLensTwoTone } from '@mui/icons-material';
import { Sidebar, Menu, MenuItem } from 'react-pro-sidebar';

import "./sidebar-style.css";


export default function SettingsPage() {
  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate(-1);
  };

  const ArrowLeftTwoTone = createSvgIcon(
    <path d="m14 7-5 5 5 5z" />,
    'ArrowLeftTwoTone'
  );


  return (
    <div className="scroller settings-innerpage" style={{
      backgroundImage: `url(${backgroundImage})`,
      width: "100vw",
      height: "100vh",
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
    }}>
    
     

      {/* rest of your component */}


    <div style={{display: "inline-block"}} >
    <Sidebar>
      <Menu>
      <MenuItem icon= {<SettingsTwoTone/>} component={<Link to="/TBD" />} > General </MenuItem>
      <MenuItem icon= {<PersonTwoTone/> } component={<Link to="/TBD" />}> User </MenuItem>
      <MenuItem icon= {<ColorLensTwoTone/>} component={<Link to="/TBD" />} > Appearance </MenuItem>
     </Menu>
  </Sidebar>;
  </div>

  <div style={{display: "inline-block"}}>
    
  <IconButton
        sx={{
          background: 'rgba(0,0,0,0.5)',
          color: 'white',
          borderRadius: '20px',
          left: "3050%",
          bottom: "120px",
          '&:hover': {
            background: 'rgba(0,0,0,0.7)',
          },
        }}
        onClick={handleBackClick}
        >
        <ArrowLeftTwoTone />
  </IconButton>
  </div>

  




  
    </div>
  );
}