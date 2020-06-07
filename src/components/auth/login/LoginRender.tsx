import React, { useState } from 'react';
import { withStyles, Theme} from "@material-ui/core/styles";

//Importing types
import { User } from "./DataTypes.ts";

// Importing the MUI Components
import { Box, Grid, Typography, FormControl, TextField, Button } from '@material-ui/core';

export interface LoginRenderProps {
    classes: any,
    handleOnSubmit: React.MouseEvent<HTMLButtonElement>
}

 
const LoginRender = ({classes, handleOnSubmit} : LoginRenderProps) => {
    
    //Defining the state
    const [user, setUser] = useState<User>({email:'', password:''});

    const handleOnChange = (evt : React.ChangeEvent<HTMLInputElement>) => {
        const { name } = evt.target;
        const { value } = evt.target;

        setUser({...user , [name]: value } )
    }

    return ( 
        <Grid container className={classes.root}>
            <Grid item xs={6} className={classes.rightSide}>
                <Box component="div" >
                   
                </Box>
            </Grid>
            <Grid item xs={6} className={classes.leftSide}>
                <Grid container>
                <Box component="div" >
                    <Typography variant="h1">Login</Typography>
                    <Box component='section'>
                        <FormControl>
                           <TextField 
                                id="email"
                                name="email"
                                type="email"
                                label="Email"
                                placeholder="Type your email"
                                value={user?.email}
                                onChange={handleOnChange}
                           /> 
                           <TextField 
                                id="password"
                                name="password"
                                type="password"
                                label="Password"
                                placeholder="Type your password"
                                value={user?.password}
                                onChange={handleOnChange}
                           /> 

                           <Button onSubmit={e => handleOnSubmit(e)} variant="contained" color="primary">Login</Button>
                        </FormControl>
                    </Box>
                </Box>
                </Grid>
            </Grid>
        </Grid>
    );
}
 
const styles = (theme : Theme) => ({
    root:{
        height: '100vh'
    },
    rightSide: {
        backgroundColor: 'white',
        backgroundImage: 'url(https://source.unsplash.com/random)', 
        backgroundSize:'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center'
    },
    leftSide: {
        color: theme.palette.divider
    }
})



export default withStyles (styles) (LoginRender)