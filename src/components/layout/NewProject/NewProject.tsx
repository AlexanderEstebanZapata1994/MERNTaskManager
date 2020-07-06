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
    const [error, setError] = React.useState<boolean>(false)

    const { addNewProject } = React.useContext(projectContext)

    const handleOnChangeProject = (e : React.ChangeEvent<HTMLInputElement>) => {
            setProject({...project, [e.target.name]: e.target.value});           
    }

    //Component did update
    React.useEffect(()=>{
        //Validate the state
        setError(project.name.length === 0)
    }, [project])

    //Component did mount
    React.useEffect(() => {
        setError(false)
    }, [])    

    const handleOnSubmitNewProject = (e : React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        addNewProject(project);

        //Restar the form 
        setProject({id: Math.round(Math.random() * 10), name: '' })
}

    //We extract the project name of the state
    const { name } = project;
    return ( 
        <NewProjectRender 
            projectName={name} 
            visible={visible} 
            error={error}
            onChangeEvent={handleOnChangeProject} 
            onSubmitEvent={handleOnSubmitNewProject}
        /> );
}
 
export {NewProject};