import React from 'react';
import { useNavigate } from 'react-router-dom';
import IconButton from '@mui/material/IconButton';
import { createSvgIcon } from '@mui/material';
import SettingsIcon from '@mui/icons-material/Settings';
import PersonIcon from '@mui/icons-material/Person';
import DisplaySettingsIcon from '@mui/icons-material/DisplaySettings';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

import SettingsPanel from './settings-panel';
import '../Assets/sidebar-style.css';

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
    <div
      style={{
        backgroundColor: '#0a0e0f',
      }}
    >
      <Grid container>
        <Grid item xs={4}>
          <Box container className="sidebar">
            <Box height="100px">
              <IconButton
                sx={{
                  background: 'rgba(0,0,0,0.5)',
                  color: 'white',
                  borderRadius: '20px',
                  position: 'absolute',
                  top: '12px',
                  left: '12px',
                  '&:hover': {
                    background: 'rgba(0,0,0,0.7)',
                  },
                }}
                onClick={handleBackClick}
              >
                <ArrowLeftTwoTone />
              </IconButton>
            </Box>
            <Box height="100px">Tabify</Box>
            <Grid container>
              <Grid item className="sidebar-item" xs={6}>
                <Box textAlign="center">
                  <IconButton
                    aria-label="general"
                    sx={{
                      width: '80px',
                      height: '80px',
                      color: 'white',
                      '&:hover': {
                        background: 'rgba(255,255,255,0.1)',
                      },
                    }}
                  >
                    <SettingsIcon />
                  </IconButton>
                </Box>
                <Box sx={{ textAlign: 'center' }}>General</Box>
              </Grid>
              <Grid item className="sidebar-item" xs={6}>
                <Box textAlign="center">
                  <IconButton
                    aria-label="profile"
                    sx={{
                      width: '80px',
                      height: '80px',
                      color: 'white',
                      '&:hover': {
                        background: 'rgba(255,255,255,0.1)',
                      },
                    }}
                  >
                    <PersonIcon />
                  </IconButton>
                </Box>
                <Box sx={{ textAlign: 'center' }}>Profile</Box>
              </Grid>
              <Grid item className="sidebar-item" xs={6}>
                <Box textAlign="center">
                  <IconButton
                    aria-label="display"
                    sx={{
                      alignSelf: 'center',
                      width: '80px',
                      height: '80px',
                      color: 'white',
                      '&:hover': {
                        background: 'rgba(255,255,255,0.1)',
                      },
                    }}
                  >
                    <DisplaySettingsIcon />
                  </IconButton>
                </Box>
                <Box sx={{ textAlign: 'center' }}>Display</Box>
              </Grid>
            </Grid>
          </Box>
        </Grid>
        <Grid item xs={8}>
          <SettingsPanel />
        </Grid>
      </Grid>
    </div>
  );
}
