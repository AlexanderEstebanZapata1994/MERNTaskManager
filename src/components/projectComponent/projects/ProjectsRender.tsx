import React from 'react';
import clsx from 'clsx';
import { Grid, Box } from '@material-ui/core';

import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import AddIcon from '@material-ui/icons/Add';

import { NewProject } from "../../layout";
import { ProjectList } from '../projectList';

export interface ProjectsRenderProps {
    
}


const drawerWidth = 260;
 
const ProjectsRender = ( props: ProjectsRenderProps) => {
    const classes = useStyles();
    const [open, setOpen] = React.useState<boolean>(true);
    const [showNewProject, setShowNewProject] = React.useState<boolean>(true)


    const handleDrawerOpen = () => {
        setOpen(true);
      };
    
      const handleDrawerClose = () => {
        setOpen(false);
        setShowNewProject(false)
      };

    return ( 
        <Grid container >
            <Box className={classes.root}>
                <CssBaseline />
                <AppBar
                    position="fixed"
                    className={clsx(classes.appBar, {[classes.appBarShift]: open, })}
                >
                    <Toolbar>
                        <IconButton
                            color="inherit"
                            aria-label="open drawer"
                            onClick={handleDrawerOpen}
                            edge="start"
                            className={clsx(classes.menuButton, {[classes.hide]: open,})}
                        >
                            <MenuIcon />
                        </IconButton>
                        <Typography variant="h6" noWrap>
                            MERN Task Manager
                        </Typography>
                    </Toolbar>
                </AppBar>
                <Drawer
                    variant="permanent"
                    className={clsx(classes.drawer, {[classes.drawerOpen]: open, [classes.drawerClose]: !open,})}
                    classes={{paper: clsx({[classes.drawerOpen]: open, [classes.drawerClose]: !open,}),}}
                >
                    <Box className={classes.toolbar}>
                        <IconButton onClick={handleDrawerClose}>
                           <ChevronLeftIcon />
                        </IconButton>
                    </Box>
                    <Divider />
                    <List>
                        <ListItem button key={'new-project'} onClick={() => {setOpen(true); setShowNewProject(!showNewProject)}}>
                            <ListItemIcon  ><AddIcon /></ListItemIcon>
                            <ListItemText primary="New project" />
                        </ListItem>
                        <NewProject visible={showNewProject} />
                    </List>
                    <Divider />
                </Drawer>
                <Box component="main" className={classes.content}>
                    <Box className={classes.toolbar} />
                    <ProjectList />
                </Box>
            </Box>
        </Grid>
    );
}
 
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
    },
    appBar: {
      zIndex: theme.zIndex.drawer + 1,
      transition: theme.transitions.create(['width', 'margin'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
    },
    appBarShift: {
      marginLeft: drawerWidth,
      width: `calc(100% - ${drawerWidth}px)`,
      transition: theme.transitions.create(['width', 'margin'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
    },
    menuButton: {
      marginRight: 36,
    },
    hide: {
      display: 'none',
    },
    drawer: {
      width: drawerWidth,
      flexShrink: 0,
      whiteSpace: 'nowrap',
    },
    drawerOpen: {
      width: drawerWidth,
      transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
    },
    drawerClose: {
      transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      overflowX: 'hidden',
      width: theme.spacing(7) + 1,
      [theme.breakpoints.up('sm')]: {
        width: theme.spacing(9) + 1,
      },
    },
    toolbar: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'flex-end',
      padding: theme.spacing(0, 1),
      // necessary for content to be below app bar
      ...theme.mixins.toolbar,
    },
    content: {
      flexGrow: 1,
      padding: theme.spacing(3),
      maxWidth: "500px"
    },
  }),
);

export default ProjectsRender;