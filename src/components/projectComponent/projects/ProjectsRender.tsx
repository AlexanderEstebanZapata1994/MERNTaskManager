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

import NewProjectForm from "../../layout";
import ProjectList from '../projectList';
import AppBarMenuAction from "../../appBarMenuAction"
import FormTask from 'src/components/tasks';

const ProjectsRender = ( props: ProjectsRenderProps) => {
    const classes = useStyles();
    
    const [ open, setOpen ] = React.useState<boolean>(true);
    const [ showCreatedProjects, setShowCreatedProjects ] = React.useState<boolean>(true)
    const { newProjectFormIsOpen, setNewProjectFormIsOpen } = props;
    
    const handleDrawerOpen = () => {
        setOpen(true);
        setShowCreatedProjects(true);
    };
    
    const handleDrawerClose = () => {
        setOpen(false);
        setNewProjectFormIsOpen(false);
        setShowCreatedProjects(false);
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
                        <Typography variant="h6" noWrap align="left">
                            Welcome Alexander!
                        </Typography>
                        <Box className={classes.appBarMenuOptions}>
                          <AppBarMenuAction  />
                        </Box>
                    </Toolbar>
                </AppBar>
                <Drawer
                
                    variant="permanent"
                    className={clsx(classes.drawer, {[classes.drawerOpen]: open, [classes.drawerClose]: !open,})}
                    classes={{paper: clsx({[classes.drawerOpen]: open, [classes.drawerClose]: !open,}),}}
                >
                    <Box className={classes.toolbar}>
                      <Typography variant="h6" noWrap align="left">
                        Task Manager
                      </Typography>
                      <IconButton onClick={handleDrawerClose}>
                        <ChevronLeftIcon />
                      </IconButton>
                    </Box>
                    <Divider />
                    <List>
                        <ListItem button key={'new-project'} onClick={() => {setOpen(true); setNewProjectFormIsOpen(!newProjectFormIsOpen)}}>
                            <ListItemIcon  ><AddIcon /></ListItemIcon>
                            <ListItemText primary="New project" />
                        </ListItem>
                        <NewProjectForm visible={newProjectFormIsOpen} />
                        <ProjectList visible={showCreatedProjects} />
                    </List>
                    <Divider />
                </Drawer>
                <Box component="main" className={classes.content}>
                    <Box className={classes.toolbar} />
                    <FormTask />
                </Box>
            </Box>
        </Grid>
    );
}
 
const useStyles = makeStyles((theme: Theme, widthDrawer: number = 350) =>
  createStyles({
    root: {
      display: 'flex',
      width: '100%'
    },
    appBar: {
      zIndex: theme.zIndex.drawer + 1,
      transition: theme.transitions.create(['width', 'margin'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
    },
    appBarShift: {
      marginLeft: widthDrawer,
      width: `calc(100% - ${widthDrawer}px)`,
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
      width: widthDrawer,
      flexShrink: 0,
      whiteSpace: 'nowrap',
    },
    drawerOpen: {
      width: widthDrawer,
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
      padding: theme.spacing(3)
    },
    appBarMenuOptions: {
      position: "absolute",
      right: theme.spacing(1)
    },
  }),
);

interface ProjectsRenderProps {
  newProjectFormIsOpen: boolean,
  setNewProjectFormIsOpen(showCreatedProjects:boolean): void
}


export default ProjectsRender;