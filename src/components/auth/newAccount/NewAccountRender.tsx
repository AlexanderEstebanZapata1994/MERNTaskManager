import React from 'react';
import { Link } from "react-router-dom";
//Importing types
import { NewAccountRenderProps } from "./DataTypes.ts";
// Importing the MUI Components
import { Box, Grid, Typography, FormControl, TextField, Button } from '@material-ui/core';
import { withStyles, Theme} from "@material-ui/core/styles";

const NewAccountRender = ({classes, onSubmitEvent, onChangeEvent, setUser, user} : NewAccountRenderProps) => {
    
    const handleOnChange = (evt : React.ChangeEvent<HTMLInputElement>) => {
        const { name } = evt.target;
        const { value } = evt.target;

        setUser({...user , [name]: value } )
        onChangeEvent(user)
    }
    
    return ( 
        <Grid container className={classes.root}>
            <Grid item xs={6} className={classes.leftSide}>
                <Grid 
                    container 
                    alignItems="center" 
                    justify="center"
                    direction="column"
                    className={classes.form}
                >
                    <Typography variant="h3">Create your account</Typography>
                    <form onSubmit={onSubmitEvent}>
                        <FormControl>
                            <Grid item xs={12} className={classes.item}>
                                <TextField 
                                    id="name"
                                    name="name"
                                    type="name"
                                    label="Name"
                                    placeholder="Type your Name"
                                    value={user?.Name}
                                    onChange={handleOnChange}
                                /> 
                            </Grid>
                            <Grid item xs={12} className={classes.item}>
                                <TextField 
                                    id="surname"
                                    name="surname"
                                    type="surname"
                                    label="Surname"
                                    placeholder="Type your surname"
                                    value={user?.surname}
                                    onChange={handleOnChange}
                                />
                            </Grid> 
                            <Grid item xs={12} className={classes.item}>
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
                            <Grid item xs={12} className={classes.item}>
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
                            <Grid item xs={12} className={classes.item}>
                                <TextField 
                                    id="password"
                                    name="password"
                                    type="password"
                                    label="Confirm password"
                                    placeholder="Confirm the password"
                                    value={user?.password}
                                    onChange={handleOnChange}
                                /> 
                            </Grid>
                            <Grid item xs={12} className={classes.item}>
                                <Button 
                                    type="submit" 
                                    variant="contained" 
                                    color="primary">
                                        Register
                                </Button>
                            </Grid>
                        </FormControl>
                    </form>
                    <Typography 
                        variant="subtitle1" 
                        className={classes.helperText}>already have an account?
                        <Link 
                            to={"/"} 
                            className={classes.link}> Login...
                        </Link>
                    </Typography>
                </Grid>
            </Grid>
            <Grid item xs={6} className={classes.rightSide} />
        </Grid>
    );
}
 
const styles = (theme : Theme) => ({
    root:{
        height: '100vh'
    },
    leftSide: {
        color: theme.palette.grey[500],
        boxShadow:'0px 0px 50px 10px black'
    },
    rightSide: {
        backgroundColor: 'white',
        backgroundImage: 'url(https://source.unsplash.com/random)', 
        backgroundSize:'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center'
    },
    form: {
        marginTop: '5%'
    },
    item: {
        margin: 'auto',
        padding: theme.spacing(2)
    },
    helperText: {
        color: theme.palette.info.dark
    },
    link: {
        textDecoration: 'none',
        color: theme.palette.secondary.dark
    }
})



export default withStyles (styles) (NewAccountRender)