import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import projectContext from "./projectContext";
import projectReducer from "./projectReducer";
import { initialState, Project, Task } from "../../types/projectTypes/projectTypes";
import { 
    NEW_PROJECT_FORM, 
    GET_PROJECTS,
    ADD_NEW_PROJECT, 
    CURRENT_PROJECT, 
    ADD_NEW_TASK
} from "./actionTypes";


const ProjectState = (props: any) => {
    const projects : Project[] = [
        {id: uuidv4(), name: "Project1", tasks:[]},
        {id: uuidv4(), name: "Project2", tasks:[]},
        {id: uuidv4(), name: "Project3", tasks:[]},
        {id: uuidv4(), name: "Project4", tasks:[]}
    ];

    // Dispatch to execute the actions
    const [state, dispatch] = React.useReducer(projectReducer, initialState);
    
    // Defining some actions
    const showFormNewProject = (showNewProjectForm: boolean) => {
        dispatch({
            type: NEW_PROJECT_FORM,
            payload: showNewProjectForm
        })
    }

    // Getting the projects
    const getProjects = () => {
        dispatch({
            type: GET_PROJECTS, 
            payload: projects
        })
    }

    // Adding new projects
    const addNewProject = (project: Project) => {
        dispatch({
            type: ADD_NEW_PROJECT,
            payload: project
        })
    }

    const setCurrentProject = (project: Project) => {
        dispatch({
            type: CURRENT_PROJECT,
            payload: project.id
        })
    }

    const addNewTaskToProject = (task: Task) => {
        dispatch({
            type: ADD_NEW_TASK,
            payload: task
        })
    }

    return (
        <projectContext.Provider
            value={{
                newProjectForm: state.newProjectForm,
                projects: state.projects,
                selectedProject: state.selectedProject,
                showFormNewProject,
                getProjects,
                addNewProject,
                addNewTaskToProject,
                setCurrentProject,
            }}
        >
            {props.children}       
        </projectContext.Provider>
    )
}

export default ProjectState;