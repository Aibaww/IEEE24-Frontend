import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import CloseIcon from '@mui/icons-material/Close';
import Slide from '@mui/material/Slide';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import CanvasCalendar from './canvas-calendar';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';

import '../../Assets/canvas-button.css';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function CanvasSelect(props) {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Box className="calendar-button">
      <Grid container>
        <Grid item xs>
          <Grid container justifyContent="flex-start"></Grid>
        </Grid>
        <Grid item xs>
          <Grid container justifyContent="flex-end">
            <Grid item xs={3}>
              <IconButton
                sx={{
                  background: 'rgba(0,0,0,0.5)',
                  color: 'white',
                  borderRadius: '20px',
                  '&:hover': {
                    background: 'rgba(0,0,0,0.7)',
                  },
                }}
                onClick={handleClickOpen}
              >
                <CalendarMonthIcon />
              </IconButton>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      {props.canvas ? (
        <Dialog
          fullScreen
          open={open}
          onClose={handleClose}
          TransitionComponent={Transition}
        >
          <AppBar sx={{ position: 'relative' }}>
            <Toolbar>
              <IconButton
                edge="start"
                color="inherit"
                onClick={handleClose}
                aria-label="close"
              >
                <CloseIcon />
              </IconButton>
              <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
                Canvas Calendar
              </Typography>
              <Button autoFocus color="inherit" onClick={handleClose}>
                Close
              </Button>
            </Toolbar>
          </AppBar>
          <Box>
            {props.canvasCalendar !== '' ? (
              <CanvasCalendar canvasCalendarData={props.canvasCalendarData} />
            ) : null}
          </Box>
        </Dialog>
      ) : (
        <Dialog
          open={open}
          onClose={handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">{'Canvas Calendar'}</DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              Login to Canvas and refresh to use this feature.
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose} autoFocus>
              Got it
            </Button>
          </DialogActions>
        </Dialog>
      )}
    </Box>
  );
}
