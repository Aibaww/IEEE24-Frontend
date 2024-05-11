import React from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import '../Assets/user-welcome.css';

export default function Greeting(props) {
  return (
    <div className="user-welcome-container">
      {props.focused ? (
        <Box className="user-welcome">
          <Grid item xs={12}>
            <Box className="user-welcome">
              {props.clock >= props.end
                ? '00:00'
                : props.end.diff(props.clock).toFormat('mm:ss').toString()}
            </Box>
          </Grid>
        </Box>
      ) : (
        <div>
          <Grid item xs={12}>
            {props.name === '' ? (
              <Box className="user-welcome">Good {props.dayPhase}.</Box>
            ) : (
              <Box className="user-welcome">
                Good {props.dayPhase}, {props.name}.
              </Box>
            )}
          </Grid>
          <Grid item xs={12}>
            <Box className="quote">{props.quote}</Box>
          </Grid>
        </div>
      )}
    </div>
  );
}
