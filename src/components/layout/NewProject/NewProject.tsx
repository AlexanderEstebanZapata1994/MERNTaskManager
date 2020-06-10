import * as React from 'react';
import NewProjectRender from "./NewProjectRender"
import { Project } from "./DataTypes";
export interface NewProjectProps {
    visible: boolean
}
 
const NewProject = ({visible} : NewProjectProps) => {
    //State for saving the project
    const [project, setProject] = React.useState<Project>({
        projectName: ''
    })

    const handleOnChangeProject = (e : React.ChangeEvent<HTMLInputElement>) => {
            setProject({...project, [e.target.name]: e.target.value});
            console.log("New project")
            console.log(e.target.value);
    }

    const handleOnSubmitNewProject = (e : React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        console.log('it is working')

        //Validate the state

        //Add to the state

        //Restar the form 
}

    //We extract the project name of the state
    const { projectName } = project;
    return ( 
        <NewProjectRender 
            projectName={projectName} 
            visible={visible} 
            onChangeEvent={handleOnChangeProject} 
            onSubmitEvent={handleOnSubmitNewProject}
        /> );
}
 
export {NewProject};