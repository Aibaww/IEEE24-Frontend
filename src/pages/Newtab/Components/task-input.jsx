import React from 'react';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import CheckIcon from '@mui/icons-material/Check';
import '../Assets/task-input.css';

export default function TaskInput(props) {
  const [input, setInput] = React.useState('');
  return (
    <Box component="form">
      <TextField
        className="task-input"
        size="small"
        id="standard-helperText"
        label="To-do"
        onChange={(event) => {
          setInput(event.target.value);
        }}
        value={input}
      ></TextField>
      <IconButton
        edge="end"
        color="inherit"
        onClick={() => {
          props.handleTaskInput(input);
          setInput('');
        }}
      >
        <CheckIcon />
      </IconButton>
    </Box>
  );
}
