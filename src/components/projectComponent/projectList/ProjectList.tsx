import React from 'react';
import ProjectListRender from "./ProjectListRender";
import { Divider } from '@material-ui/core';
import projectContext from 'src/context/projects/projectContext';

interface ProjectListProps {
    visible : boolean
}
 
const ProjectList = ({ visible } : ProjectListProps) => {
    
    const {projects, getProjects, setCurrentProject} = React.useContext(projectContext);

    React.useEffect(() => {
        getProjects();
    }, [])
    return ( 
        <>
            {visible ? 
            <>
                <Divider  />
                <ProjectListRender 
                    projects={projects}
                    setCurrentProject={setCurrentProject}
                />
            </>
            : null
            }
        </>
     );
}
 
export { ProjectList };