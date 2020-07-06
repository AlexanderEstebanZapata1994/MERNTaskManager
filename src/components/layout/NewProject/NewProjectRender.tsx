import React from 'react';
import { Box, Button, FormControl, TextField, Grid, withStyles, Theme, FormHelperText } from '@material-ui/core';

interface NewProjectRenderProps {
    classes?: any,
    visible: boolean,
    projectName: string,
    error: boolean,
    onChangeEvent: (e: React.ChangeEvent<HTMLInputElement>)=> void
    onSubmitEvent: (e: React.MouseEvent<HTMLButtonElement>)=> void
}
 
const NewProjectRender = ({visible, projectName, error, onChangeEvent, onSubmitEvent, classes} : NewProjectRenderProps) => {

    if (!visible){
        return null;
    }else {    
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
                                value={projectName}
                                onChange={onChangeEvent}
                            />
                            {error && <FormHelperText>Project name is required</FormHelperText>}
                        
                        </FormControl>
                        
                    </Grid>
                    <Button 
                        variant="outlined" 
                        color="default"
                        className={classes.button} 
                        onClick={onSubmitEvent} 
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

 
export default withStyles (styles) (NewProjectRender);