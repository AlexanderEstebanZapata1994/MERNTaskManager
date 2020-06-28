import React from 'react';
import { TaskType } from "../DataTypes";
import { ListItem, ListItemText, FormControlLabel, Checkbox, Grid, Paper, createStyles, Theme, makeStyles, IconButton } from '@material-ui/core';
import { Edit, FavoriteBorder, Favorite } from "@material-ui/icons";

interface TaskRenderProps {
    Task: TaskType
}
 
const TaskRender = ({Task} : TaskRenderProps) => {

    const classes = useStyles();

    const [completed, setCompleted] = React.useState<boolean>(false);
    return (
        <ListItem>
            <Grid container>
                <Paper elevation={1} className={classes.paper} >
                    <Grid item xs={9} md={9} className={classes.taskName}>
                        <ListItemText primary={Task.name} />
                    </Grid>
                    <Grid item xs={1} md={1}>
                        <FormControlLabel
                            control={<Checkbox checked={completed} onChange={()=>{setCompleted(!completed)}} name="checkedA" />}
                            label=""
                        />
                    </Grid>
                    <Grid item xs={1} md={1}>
                        <FormControlLabel
                            control={<Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite />} name="checkedH" />}
                            label=""
                        />
                    </Grid>
                    <Grid item xs={1} md={1}>
                        <IconButton color="primary" aria-label="upload picture" component="span">
                            <Edit />
                        </IconButton>
                    </Grid>
                </Paper>
            </Grid>
        </ListItem>
     );
}
 
const useStyles = makeStyles((theme : Theme) => createStyles({
        taskName: {
            alignContent: "center",
            display: "grid",
            paddingLeft: theme.spacing(1)
        },
        paper: {
            display: 'flex',
            width: '100%'
        }
    })
);
export default TaskRender;