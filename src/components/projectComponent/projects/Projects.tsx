import React from 'react';
import ProjectsRender from "./ProjectsRender";
import projectContext from 'src/context/projects/projectContext';

 
const Projects  = () => {
    //get the form state
    const context = React.useContext(projectContext);
    const { newProjectForm, showFormNewProject } = context; 

    return ( <ProjectsRender newProjectFormIsOpen={newProjectForm} setNewProjectFormIsOpen={showFormNewProject}/> );
}
 
export { Projects };