import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import { Task } from '../task/Task';
import { Task as TaskType, Project } from "../../../types/projectTypes/projectTypes";
import { List, Typography, makeStyles, createStyles, Theme } from '@material-ui/core';
import { SpeedDial, SpeedDialAction, SpeedDialIcon } from "@material-ui/lab";
import AddIcon from '@material-ui/icons/Add';
import DeleteIcon from '@material-ui/icons/Delete';
import projectContext from 'src/context/projects/projectContext';
 
const TaskListRender = ({ project }: TaskListRenderProps) => {
    const classes = useStyles();

    const context = React.useContext(projectContext);
    const { addNewTaskToProject } = context;

    const [open, setOpen] = React.useState<boolean>(false);
    const { name, tasks } = project;
    
    const handleOpen = () => {
        setOpen(true);
    };
    
    const handleClose = () => {
        setOpen(false);
    };

    const deleteAction = () => {
        alert('deleting')
    }

    const addAction = () => {
        addNewTaskToProject({
                name : "hola", 
                completed: true, 
                createdDate: null, 
                description: "Some description",
                favorite: false,
                id: uuidv4(),
                projectId: project.id
        })
    }

    const actions = [
        { icon: <DeleteIcon />, name: 'Delete Project', onClickEvent: deleteAction },
        { icon: <AddIcon />, name: 'Add Task', onClickEvent: addAction }
    ];

    return ( 
        <>
            <Typography variant="h4" align="center">{name}</Typography>
            {tasks ?
                <>
                    <List>
                        {tasks.map((task : TaskType) => <Task Task={task}/>) }
                    </List>
                </>
                : <Typography variant="h6" align="center" noWrap>There is no tasks for the {name}, please hit the button at the bottom right side to create a new one </Typography>
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
                    onClick={action.onClickEvent}
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

interface TaskListRenderProps {
    project: Project,
}

export default TaskListRender;