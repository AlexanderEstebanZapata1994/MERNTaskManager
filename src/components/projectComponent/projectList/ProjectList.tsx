import React from 'react';
import ProjectListRender from "./ProjectListRender";
import { Project } from "../DataTypes";
 
const ProjectList = () => {
    const projects : Project[] = [
                {name: "Project1"},
                {name: "Project2"},
                {name: "Project2"},
                
                {name: "Project2"},
                {name: "Project2"},
                {name: "Project2"},
                {name: "Project2"},
                {name: "Project2"},
                {name: "Project2"},
                {name: "Project2"},
                {name: "Project2"},
                {name: "Project2"},
                {name: "Project2"},
                {name: "Project2"},
                {name: "Project2"},
                {name: "Project2"},
                {name: "Project2"},
                {name: "Project8888"}
            ]
    return ( <ProjectListRender projects={projects}/> );
}
 
export { ProjectList };