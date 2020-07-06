import React from 'react';
import { Project } from "../../../types/projectTypes/projectTypes";
import { ListItem, ListItemIcon, ListItemText } from '@material-ui/core';
import FileCopyIcon from "@material-ui/icons/FileCopyOutlined";

export interface ProjectItemRenderProps {
   project : Project,
   classes?: any
}
 
const ProjectItemRender = ( {project, classes}:ProjectItemRenderProps) => {
    return ( 
        <ListItem button key={'new-project'} >
            <ListItemIcon><FileCopyIcon /></ListItemIcon>
            <ListItemText primary={project.name} />
        </ListItem> );
}
 
export {ProjectItemRender};