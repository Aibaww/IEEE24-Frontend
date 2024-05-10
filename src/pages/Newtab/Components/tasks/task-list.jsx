import React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import Checkbox from './checkbox';
import '../../Assets/tab-list.css';

export default function TaskList(props) {
  return (
    <List className="list">
      {props.taskList.length > 0
        ? props.taskList.map((taskItem, i) => {
            return (
              <ListItem
                key={i}
                secondaryAction={
                  <div>
                    <Checkbox />
                    <IconButton
                      edge="end"
                      color="inherit"
                      aria-label="delete"
                      onClick={() => {
                        var arr = props.taskList.filter((taskItem, j) => {
                          return i !== j;
                        });
                        props.updateTasks(arr);
                      }}
                    >
                      <DeleteIcon />
                    </IconButton>
                  </div>
                }
              >
                <ListItemText
                  primaryTypographyProps={{ fontSize: '14px' }}
                  primary={taskItem}
                />
              </ListItem>
            );
          })
        : null}
    </List>
  );
}
