import React from 'react';
import { Task } from '../task/Task';
import { TaskType } from "../DataTypes";
import { List, Typography, Fab, makeStyles, createStyles, Theme } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';

export interface TaskListRenderProps {
    Tasks : TaskType[]
}
 
const TaskListRender = ({Tasks }: TaskListRenderProps) => {
    const classes = useStyles();
    return ( 
        <>
            <Typography variant="h4" align="center">Project 1</Typography>
            {Tasks.length !== 0 
            ?
                <List>
                    {Tasks.map((task : TaskType) => <Task Task={task}/>) }
                </List>
            :<Typography variant="h6" align="center" noWrap>No tasks created for the Project 1 yet, hit the add button to create a new one...</Typography>
            }
            <Fab color="primary" aria-label="add" className={classes.fabButton}>
                <AddIcon />
            </Fab>
        </>
     );
} 

const useStyles = makeStyles((theme : Theme) =>
    createStyles({
        fabButton: {
            position: "absolute",
            right: theme.spacing(1),
            bottom: theme.spacing(1)
        }
    })
)
 
export default TaskListRender;