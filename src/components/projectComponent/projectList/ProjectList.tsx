import React from 'react';
import ProjectListRender from "./ProjectListRender";
import { Divider } from '@material-ui/core';
import projectContext from 'src/context/projects/projectContext';

interface ProjectListProps {
    visible : boolean
}
 
const ProjectList = ({ visible } : ProjectListProps) => {
    
    const {projects} = React.useContext(projectContext);
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