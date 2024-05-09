import React from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import '../Assets/user-welcome.css';

export default function Greeting(props) {
  return (
    <div className="user-welcome-container">
      {props.focused ? (
        <Box className="user-welcome"></Box>
      ) : (
        <div>
          <Grid item xs={12}>
            <Box className="user-welcome">
              Good {props.dayPhase}, {props.name}.
            </Box>
          </Grid>
          <Grid item xs={12}>
            <Box className="quote">{props.quote}</Box>
          </Grid>
        </div>
      )}
    </div>
  );
}
