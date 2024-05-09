import React from 'react';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import IconButton from '@mui/material/IconButton';
import Avatar from '@mui/material/Avatar';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import DeleteIcon from '@mui/icons-material/Delete';
import '../Assets/tab-list.css';

export default function TabList(props) {
  return (
    <Box className="list-box">
      <List className="list">
        {props.tabs.length > 0
          ? props.tabs.map((tab, index) => {
              return (
                <ListItem
                  key={index}
                  secondaryAction={
                    <div>
                      <IconButton
                        edge="end"
                        color="inherit"
                        aria-label="open"
                        onClick={() => {
                          window.open(tab.url, '_blank');
                        }}
                      >
                        <OpenInNewIcon />
                      </IconButton>
                      <IconButton
                        edge="end"
                        color="inherit"
                        aria-label="delete"
                        onClick={() => {
                          var arr = props.tabs.filter((tab, tabIndex) => {
                            return index !== tabIndex;
                          });
                          props.updateTabs(arr);
                        }}
                      >
                        <DeleteIcon />
                      </IconButton>
                    </div>
                  }
                >
                  <ListItemAvatar>
                    <Avatar src={tab.favicon} />
                  </ListItemAvatar>
                  <ListItemText
                    primaryTypographyProps={{ fontSize: '14px' }}
                    primary={tab.title}
                  />
                </ListItem>
              );
            })
          : null}
      </List>
    </Box>
  );
}
