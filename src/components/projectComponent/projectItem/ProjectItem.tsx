import React from 'react';
import { Project } from "../../../types/projectTypes/projectTypes";
import { ListItem, ListItemIcon, ListItemText } from '@material-ui/core';
import FileCopyIcon from "@material-ui/icons/FileCopyOutlined";
import withStyles from "@material-ui/core/styles/withStyles";

export interface ProjectItemProps {
   project : Project,
   setCurrentProject(project:Project): void,
   classes?: any
}
 
const ProjectItem = ( {project, setCurrentProject, classes}:ProjectItemProps) => {

    return ( 
        <ListItem button key={project.id} className={classes.cursor} onClick={() => setCurrentProject(project)} >
            <ListItemIcon><FileCopyIcon /></ListItemIcon>
            <ListItemText primary={project.name} />
        </ListItem> );
}

const styles = () => ({
    list: {
        cursor: "pointer"
    }
})
 
export default withStyles(styles)(ProjectItem);