import React from 'react';
import { ProjectItemRender } from "../projectItem";
import { Project } from "../DataTypes";
import { withStyles, Theme, List, Typography } from '@material-ui/core';

interface ProjectListRenderProps {
    projects: Project[],
    classes?: any
}
 
const ProjectListRender = ({projects, classes} : ProjectListRenderProps) => {
    return ( 
        <>
            <Typography variant="h5" align="center" className={classes.title}>Your Projects</Typography>
            <List className={classes.roots}>
                {projects.map((project : Project) =>  <ProjectItemRender project={project} />)}
            </List>
        </>
    )
}
 
const styles = (theme : Theme) => ({
    roots: {
        overflowY : "auto" as "auto",
        maxHeight: '250px',
    },
    title: {
        paddingTop: (theme.spacing(1) + 2)
    }
})
export default withStyles (styles) (ProjectListRender);