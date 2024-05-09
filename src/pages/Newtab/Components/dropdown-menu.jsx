import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Switch from '@mui/material/Switch';

export default function BasicMenu({ updateFocused }) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleToggle = () => {
    updateFocused();
  };

  return (
    <div>
      <Button
        sx={{
          background: 'rgba(0,0,0,0.5)',
          color: 'white',
          padding: '10px',
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
        Settings
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <MenuItem onClick={handleClose}>General</MenuItem>
        <MenuItem>
          <div>
            Focus Mode
            <Switch onClick={handleToggle} />
          </div>
        </MenuItem>
      </Menu>
    </div>
  );
}