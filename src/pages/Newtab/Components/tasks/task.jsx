import TaskInput from './task-input';
import TaskList from './task-list';
import '../../Assets/task';
import Box from '@mui/material/Box';
import React from 'react';

export default function TaskBox(props) {
  const handleTaskInput = (text, date) => {
    if (text !== '' && date !== undefined && date.$d !== null) {
      const originalDate = date.toString();
      const splitString = originalDate.split(' ');
      const NewDate =
        'Due ' + splitString[0] + ' ' + splitString[2] + ' ' + splitString[1];
      props.updateTasks([...props.tasks, { text: text, date: NewDate }]);
    }
  };

  return (
    <div>
      <Box className="task-box">
        <TaskList taskList={props.tasks} updateTasks={props.updateTasks} />
      </Box>
      <Box>
        <TaskInput handleTaskInput={handleTaskInput} />
      </Box>
    </div>
  );
}
