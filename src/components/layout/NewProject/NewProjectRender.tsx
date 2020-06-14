import React from 'react';
import { Box, Button, FormControl, TextField, Grid, withStyles, Theme, FormHelperText } from '@material-ui/core';

export interface NewProjectRenderProps {
    classes?: any,
    visible: boolean,
    projectName: string,
    onChangeEvent: (e: React.ChangeEvent<HTMLInputElement>)=> void
    onSubmitEvent: (e: React.MouseEvent<HTMLButtonElement>)=> void
}
 
const NewProjectRender = ({visible, projectName, onChangeEvent, onSubmitEvent, classes} : NewProjectRenderProps) => {

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
                        <FormControl error>
                            <TextField
                                required
                                type="text"
                                name="projectName"
                                placeholder="Type your project name"
                                label="Project name"
                                value={projectName}
                                onChange={onChangeEvent}
                            />
                            <FormHelperText>Project name is required</FormHelperText>
                        
                        </FormControl>
                        
                    </Grid>
                    <Button 
                        variant="outlined" 
                        color="secondary"
                        className={classes.button} 
                        onSubmit={onSubmitEvent} 
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
        marginBottom: '10px',
        color: theme.palette.secondary.dark
    }
});

 
export default withStyles (styles) (NewProjectRender);