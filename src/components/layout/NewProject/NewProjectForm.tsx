import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import { Box, Button, FormControl, TextField, Grid, withStyles, Theme, FormHelperText } from '@material-ui/core';
import { Project } from "../../../types/projectTypes/projectTypes";
import projectContext from 'src/context/projects/projectContext';
export interface NewProjectProps {
    visible: boolean,
    classes: any
}
 
const NewProjectForm = ({visible, classes} : NewProjectProps) => {
    //State for saving the project
    const [project, setProject] = React.useState<Project>({
        id: uuidv4(),
        name: '',
        tasks: []
    })
    const [error, setError] = React.useState<boolean>(false)

    const { addNewProject } = React.useContext(projectContext)

    const handleOnChangeProject = (e : React.ChangeEvent<HTMLInputElement>) => {
            setProject({...project, [e.target.name]: e.target.value});           
    }

    React.useEffect(()=>{
        setError(project.name.length === 0)
    }, [project])


    React.useEffect(() => {
        setError(false)
    }, [])    

    const handleOnSubmitNewProject = (e : React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        addNewProject(project);

        setProject({id: uuidv4(), name: '', tasks: []})
    }

    const { name } = project;
    if (!visible){
        return null
    }
    else {
        return ( 
            <Box className={classes.root}>
                <Grid   
                    container 
                    direction="column" 
                    alignContent="center"
                    alignItems="stretch"
                    spacing={2}
                >
                    <Grid item xs={12}>
                        <FormControl error={error}>
                            <TextField
                                required
                                type="text"
                                name="name"
                                placeholder="Type your project name"
                                label="Project name"
                                value={name}
                                onChange={handleOnChangeProject}
                            />
                            {error && <FormHelperText>Project name is required</FormHelperText>}
                        
                        </FormControl>
                        
                    </Grid>
                    <Button 
                        variant="outlined" 
                        color="default"
                        className={classes.button} 
                        onClick={handleOnSubmitNewProject} 
                        disabled={error}
                    >
                        Add project
                    </Button>
                </Grid> 
            </Box>
        );
    }
}
 

const styles = (theme: Theme) => ({
    root:{
        flexGrow: 1
    },
    button:{
        marginBottom: '5vh',
        color: theme.palette.secondary.dark,
    }
});

export default withStyles(styles)(NewProjectForm);