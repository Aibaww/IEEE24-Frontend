import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Switch from '@mui/material/Switch';
import SettingsIcon from '@mui/icons-material/Settings';
import IconButton from '@mui/material/IconButton';
import { useNavigate } from 'react-router-dom';
import TextField from '@mui/material/TextField';

export default function BasicMenu(props) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleToggle = () => {
    props.updateFocused();
  };

  const handleNameInput = (name) => {
    props.updateName(name);
  };

  const navigate = useNavigate();

  const handleSettingsClick = () => {
    navigate('/settings');
  };

  return (
    <div>
      <IconButton
        sx={{
          background: 'rgba(0,0,0,0.5)',
          color: 'white',
          borderRadius: '20px',
          '&:hover': {
            background: 'rgba(0,0,0,0.7)',
          },
        }}
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
        <SettingsIcon />
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
        <MenuItem onClick={handleSettingsClick}>Settings</MenuItem>
        <MenuItem>
          <div>
            Focus Mode
            <Switch onClick={handleToggle} />
          </div>
        </MenuItem>
        <MenuItem>
          <TextField
            className="task-input"
            size="small"
            id="standard-helperText"
            label="Enter your name"
            onChange={(event) => {
              handleNameInput(event.target.value);
            }}
            value={props.name}
          ></TextField>
        </MenuItem>
      </Menu>
    </div>
  );
}
