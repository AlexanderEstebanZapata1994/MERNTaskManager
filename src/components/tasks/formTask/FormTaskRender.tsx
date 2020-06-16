import React from 'react';
import TaskList from '../taskList/TaskList';

export interface FormTaskRenderProps {
    classes?: any
}
 
const FormTaskRender = ({classes} : FormTaskRenderProps) => {
    return ( <TaskList /> );
}
 
export default FormTaskRender;