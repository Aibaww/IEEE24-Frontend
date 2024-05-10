import * as React from 'react';
import IconButton from '@mui/material/IconButton';
import CalendarMonth from '@mui/icons-material/CalendarMonth';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

export default function CalendarSelector(props) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <IconButton
        edge="end"
        color="inherit"
        aria-label="calendar"
        onClick={handleClick}
      >
        <CalendarMonth />
      </IconButton>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <MenuItem onClick={handleClose}>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DateCalendar
              onChange={(newValue) => {
                props.setDate(newValue);
                console.log(newValue);
              }}
            />
          </LocalizationProvider>
        </MenuItem>
      </Menu>
    </div>
  );
}
