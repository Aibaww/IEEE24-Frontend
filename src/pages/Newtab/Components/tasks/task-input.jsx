import React from 'react';
import CalendarSelect from './calendar-select';
import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import CheckIcon from '@mui/icons-material/Check';
import Grid from '@mui/material/Grid';
import '../../Assets/task-input.css';

export default function TaskInput(props) {
  const [text, setText] = React.useState('');

  const [date, setDate] = React.useState(null);

  const handleChange = (date) => {
    setDate(date);
  };

  return (
    <Grid container>
      <Grid item xs={2} />
      <Grid item xs={6}>
        <TextField
          className="task-input"
          size="small"
          id="standard-helperText"
          label="To-do"
          onChange={(event) => {
            setText(event.target.value);
          }}
          value={text}
        ></TextField>
      </Grid>
      <Grid item xs={1}>
        <CalendarSelect date={date} setDate={handleChange} />
      </Grid>
      <Grid item xs={1}>
        <IconButton
          edge="end"
          color="inherit"
          onClick={() => {
            if (text !== undefined && date != null) {
              props.handleTaskInput(text, date.$d);
              setText('');
            }
          }}
        >
          <CheckIcon />
        </IconButton>
      </Grid>
      <Grid item xs={1} />
    </Grid>
  );
}
