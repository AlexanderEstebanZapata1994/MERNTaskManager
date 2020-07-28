import * as React from 'react';
import TaskListRender from './TaskListRender';
import projectContext from 'src/context/projects/projectContext';
import { Typography } from '@material-ui/core';

 
const TaskList  = () => {

    const context = React.useContext(projectContext);
    const {selectedProject} = context;
    return ( 
        <>
            { 
                selectedProject 
                ? <TaskListRender project={selectedProject} /> 
                : <Typography variant="h6" align="center" noWrap>You have not selected any project</Typography>
            }
        </>
    );
}
 
export default TaskList;