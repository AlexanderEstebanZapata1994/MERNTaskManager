import React from 'react';
import { Task } from '../task/Task';
import { TaskType } from "../DataTypes";
import { List, Typography, makeStyles, createStyles, Theme } from '@material-ui/core';
import { SpeedDial, SpeedDialAction, SpeedDialIcon } from "@material-ui/lab";
import AddIcon from '@material-ui/icons/Add';
import DeleteIcon from '@material-ui/icons/Delete';

export interface TaskListRenderProps {
    projectTitle: string, 
    Tasks : TaskType[]
}
 
const TaskListRender = ({projectTitle, Tasks }: TaskListRenderProps) => {
    const classes = useStyles();
    const [open, setOpen] = React.useState<boolean>(false);
    const actions = [
    { icon: <DeleteIcon />, name: 'Delete Project' },
    { icon: <AddIcon />, name: 'Add Task' }
    ];

    const handleOpen = () => {
    setOpen(true);
    };
    
    const handleClose = () => {
    setOpen(false);
    };


    return ( 
        <>
            <Typography variant="h4" align="center">{projectTitle}</Typography>
            {Tasks.length !== 0 
            ?
                <List>
                    {Tasks.map((task : TaskType) => <Task Task={task}/>) }
                </List>
            :<Typography variant="h6" align="center" noWrap>No tasks created for the Project 1 yet, hit the add button to create a new one...</Typography>
            }
            <SpeedDial
                ariaLabel="SpeedDial tooltip example"
                className={classes.fabButton}
                icon={<SpeedDialIcon />}
                onClose={handleClose}
                onOpen={handleOpen}
                open={open}
            >
                {actions.map((action) => (
                <SpeedDialAction
                    key={action.name}
                    icon={action.icon}
                    tooltipTitle={action.name}
                    tooltipOpen
                    onClick={handleClose}
                />
                ))}
            </SpeedDial>
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