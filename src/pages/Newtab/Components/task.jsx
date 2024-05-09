import TaskInput from './task-input';
import TaskList from './task-list';
import '../Assets/task';
import Box from '@mui/material/Box';
import React from 'react';

export default function TaskBox(props) {
  const handleTaskInput = (input) => {
    props.updateTasks([...props.tasks, input]);
  };

  return (
    <div>
      <Box className="task-list">
        <TaskList taskList={props.tasks} updateTasks={props.updateTasks} />
      </Box>
      <Box>
        <TaskInput handleTaskInput={handleTaskInput} />
      </Box>
    </div>
  );
}
