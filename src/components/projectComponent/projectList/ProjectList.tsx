import React from 'react';
import ProjectListRender from "./ProjectListRender";
import { Project } from "../DataTypes";
import { Divider } from '@material-ui/core';

interface ProjectListProps {
    visible : boolean
}
 
const ProjectList = ({ visible } : ProjectListProps) => {
    const projects : Project[] = [
                {name: "Project1"},
                {name: "Project2"},
                {name: "Project2"},
                {name: "Project8888"}
            ]
    return ( 
        <>
            {visible ? 
            <>
                <Divider  />
                <ProjectListRender projects={projects}/>
            </>
            : null
            }
        </>
     );
}
 
export { ProjectList };