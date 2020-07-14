import * as React from 'react';
import { TaskType } from "../DataTypes";
import TaskListRender from './TaskListRender';
import projectContext from 'src/context/projects/projectContext';

 
const TaskList  = () => {

    const context = React.useContext(projectContext);
    const {selectedProject} = context;
    const Tasks : TaskType[] = [
        {id:1, name:"Tarea 1"},
        {id:2, name:"Tarea 2"},
        {id:3, name:"Tarea 3"},
    ]
    return ( <TaskListRender projectTitle={selectedProject.name} Tasks={Tasks}  /> );
}
 
export default TaskList;