import { Calendar, luxonLocalizer } from 'react-big-calendar';
import { DateTime } from 'luxon';
import React from 'react';
import DialogTitle from '@mui/material/DialogTitle';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import parse from 'html-react-parser';
import Divider from '@mui/material/Divider';

//import '../Assets/canvas-calendar.css';
import 'react-big-calendar/lib/css/react-big-calendar.css';

export default function CanvasCalendar(props) {
  const localizer = luxonLocalizer(DateTime);
  const [open, setOpen] = React.useState(false);
  const [selectedData, setSelectedData] = React.useState(null);

  const handleClickOpen = (event) => {
    setSelectedData(event);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      {props.canvasCalendarData.length > 0 ? (
        <Calendar
          localizer={localizer}
          events={props.canvasCalendarData}
          style={{ height: '92vh' }}
          onSelectEvent={handleClickOpen}
          popup
        />
      ) : null}
      {selectedData !== null ? (
        <Dialog
          open={open}
          onClose={handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">
            <a
              href={selectedData.html_url ? selectedData.html_url : ''}
              target="_blank"
              rel="noreferrer"
            >
              {selectedData.title}
            </a>
          </DialogTitle>
          <Divider />
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              <h4>Calendar</h4>
              <a
                href={
                  'https://canvas.northwestern.edu/courses/' +
                  selectedData.context_code.split('_')[1]
                }
                target="_blank"
                rel="noreferrer"
              >
                {selectedData.context_name}
              </a>
              <h4>Details</h4>
              {parse(selectedData.description)}
            </DialogContentText>
          </DialogContent>
        </Dialog>
      ) : null}
    </div>
  );
}
