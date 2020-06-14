import React from 'react';
import { ProjectItemRender } from "../projectItem";
import { Project } from "../DataTypes";
import { withStyles, Theme, List } from '@material-ui/core';

interface ProjectListRenderProps {
    projects: Project[],
    classes?: any
}
 
const ProjectListRender = ({projects, classes} : ProjectListRenderProps) => {
    return ( 
        <List className={classes.roots}>
            {projects.map((project : Project) =>  <ProjectItemRender project={project} />)}
        </List>
    )
}
 
const styles = (theme : Theme) => ({
    roots: {
        overflowY : "auto" as "auto",
        maxHeight: '500px',
    }
})
export default withStyles (styles) (ProjectListRender);