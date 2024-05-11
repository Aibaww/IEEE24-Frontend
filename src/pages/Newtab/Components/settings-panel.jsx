import React from 'react';
import IconButton from '@mui/material/IconButton';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import TextField from '@mui/material/TextField';
import TimezoneSelect from 'react-timezone-select';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

import '../Assets/settings-panel.css';

export default function SettingsPanel() {
  const [text, setText] = React.useState('');
  const [timezone, setTimezone] = React.useState(
    Intl.DateTimeFormat().resolvedOptions().timeZone
  );
  const [timer, setTimer] = React.useState('');

  const handleTimer = (event) => {
    setTimer(event.target.value);
  };

  return (
    <Box className="panel">
      <Box
        height="100px"
        fontSize="20px"
        padding="10px"
        display="flex"
        alignItems="center"
      >
        General Settings
      </Box>
      <Divider color="white" width="80%" />
      <Grid container>
        <Grid item xs={4}>
          <List>
            <ListItem>
              <Box padding="10px" fontSize="14px">
                Display Name
              </Box>
            </ListItem>
            <ListItem>
              <Box padding="10px" fontSize="14px">
                TimeZone
              </Box>
            </ListItem>
          </List>
        </Grid>
        <Grid item xs={8}>
          <List>
            <ListItem>
              <TextField
                sx={{
                  background: '#36454F',
                  input: { color: 'white' },
                  borderRadius: '10px',
                  width: '190px',
                }}
                size="small"
                id="standard-helperText"
                label="input your name"
                onChange={(event) => {
                  setText(event.target.value);
                }}
                value={text}
              ></TextField>
            </ListItem>
            <ListItem>
              <TimezoneSelect value={timezone} onChange={setTimezone} />
            </ListItem>
          </List>
        </Grid>
      </Grid>
      <Box
        height="100px"
        fontSize="16px"
        padding="10px"
        display="flex"
        alignItems="center"
      >
        Focus Mode
      </Box>
      <Grid container>
        <Grid item xs={4}>
          <List>
            <ListItem>
              <Box padding="10px" fontSize="14px">
                Timer Length
              </Box>
            </ListItem>
          </List>
        </Grid>
        <Grid item xs={8}>
          <List>
            <ListItem>
              <FormControl>
                <InputLabel id="demo-simple-select-label">
                  Timer Length
                </InputLabel>
                <Select
                  sx={{
                    background: '#36454F',
                    input: { color: 'white' },
                    borderRadius: '10px',
                    width: '190px',
                  }}
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={timer}
                  label="Timer Length"
                  onChange={handleTimer}
                >
                  <MenuItem value={10}>10 minutes</MenuItem>
                  <MenuItem value={20}>30 minutes</MenuItem>
                  <MenuItem value={30}>1 hour</MenuItem>
                </Select>
              </FormControl>
            </ListItem>
          </List>
        </Grid>
      </Grid>
    </Box>
  );
}
