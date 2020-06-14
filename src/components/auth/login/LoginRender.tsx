import React from 'react';
import { Link } from "react-router-dom";
//Importing types
import { LoginRenderProps } from "./DataTypes";
// Importing the MUI Components
import { Grid, Typography, FormControl, TextField, Button } from '@material-ui/core';
import { withStyles, Theme} from "@material-ui/core/styles";

const LoginRender = ({classes, onSubmitEvent, onChangeEvent, setUser, user} : LoginRenderProps) => {
    
    const handleOnChange = (evt : React.ChangeEvent<HTMLInputElement>) => {
        const { name } = evt.target;
        const { value } = evt.target;

        setUser({...user , [name]: value } )
        onChangeEvent(user)
    }


    return ( 
        <Grid container className={classes.root}>
            <Grid item xs={undefined} sm={6} className={classes.leftSide} />
            <Grid item xs={12} sm={6} className={classes.rightSide}>
                <Grid 
                    container 
                    alignItems="center" 
                    justify="center"
                    direction="column"
                    className={classes.form}
                >
                    <Typography variant="h3">Login</Typography>
                    <form onSubmit={onSubmitEvent}>
                        <FormControl>
                            <Grid item xs={12}  className={classes.item}>
                                <TextField 
                                    id="email"
                                    name="email"
                                    type="email"
                                    label="Email"
                                    placeholder="Type your email"
                                    value={user?.email}
                                    onChange={handleOnChange}
                                /> 
                            </Grid>
                            <Grid item xs={12}  className={classes.item}>
                                <TextField 
                                    id="password"
                                    name="password"
                                    type="password"
                                    label="Password"
                                    placeholder="Type your password"
                                    value={user?.password}
                                    onChange={handleOnChange}
                                /> 
                            </Grid>
                            <Grid item xs={12}  className={classes.item}>
                                <Button 
                                    type="submit" 
                                    variant="contained" 
                                    color="primary">
                                        Login
                                </Button>
                            </Grid>
                        </FormControl>
                    </form>
                    <Typography 
                        variant="subtitle1" 
                        className={classes.helperText}>Don't have an account?
                            <Link 
                                to={"/new-account"} 
                                className={classes.link}> Sign up
                            </Link>
                    </Typography>
                </Grid>
            </Grid>
        </Grid>
    );
}
 
const styles = (theme : Theme) => ({
    root:{
        height: '100vh'
    },
    leftSide: {
        backgroundColor: 'white',
        backgroundImage: 'url(https://source.unsplash.com/random)', 
        backgroundSize:'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center'
    },
    rightSide: {
        color: theme.palette.grey[500],
        boxShadow:'0px 0px 50px 10px black'
    },
    form: {
        marginTop: '30%'
    },
    item: {
        margin: 'auto',
        padding: theme.spacing(1)
    },
    helperText: {
        color: theme.palette.info.dark
    },
    link: {
        textDecoration: 'none',
        color: theme.palette.secondary.dark
    }
})



export default withStyles (styles) (LoginRender)