import * as React from 'react';
import TaskRender from './TaskRender';
import { TaskType } from "../DataTypes";

interface TaskProps {
    Task: TaskType
}
 
const Task = ({Task} : TaskProps) => {
    return ( <TaskRender Task={Task} /> );
}
 
export {Task};