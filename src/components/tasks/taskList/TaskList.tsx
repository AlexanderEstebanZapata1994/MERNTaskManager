import * as React from 'react';
import { TaskType } from "../DataTypes";
import TaskListRender from './TaskListRender';

 
const TaskList  = () => {

    const Tasks : TaskType[] = [
        {id:1, name:"Tarea 1"},
        {id:2, name:"Tarea 2"},
        {id:3, name:"Tarea 3"},
    ]
    return ( <TaskListRender Tasks={Tasks} /> );
}
 
export default TaskList;