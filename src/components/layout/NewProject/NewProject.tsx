import React from 'react';
import NewProjectRender from "./NewProjectRender";
import { Project } from "../../../types/projectTypes/projectTypes";
import projectContext from 'src/context/projects/projectContext';
export interface NewProjectProps {
    visible: boolean
}
 
const NewProject = ({visible} : NewProjectProps) => {
    //State for saving the project
    const [project, setProject] = React.useState<Project>({
        id: Math.round(Math.random() * 10),
        name: ''
    })

    const { addNewProject } = React.useContext(projectContext)

    const handleOnChangeProject = (e : React.ChangeEvent<HTMLInputElement>) => {
            setProject({...project, [e.target.name]: e.target.value});
            
    }

    const handleOnSubmitNewProject = (e : React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        addNewProject(project);

        //Validate the state

        //Add to the state

        //Restar the form 
        setProject({id: Math.round(Math.random() * 10), name: '' })
}

    //We extract the project name of the state
    const { name } = project;
    return ( 
        <NewProjectRender 
            projectName={name} 
            visible={visible} 
            onChangeEvent={handleOnChangeProject} 
            onSubmitEvent={handleOnSubmitNewProject}
        /> );
}
 
export {NewProject};