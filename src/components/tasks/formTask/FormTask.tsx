import React from 'react';
import TaskList from '../taskList/TaskList';

export interface FormTaskProps {
    classes?: any
}
 
const FormTask = ({classes} : FormTaskProps) => {
    return ( <TaskList /> );
}
 
export default FormTask;