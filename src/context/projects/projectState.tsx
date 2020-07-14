import React from 'react';
import projectContext from "./projectContext";
import projectReducer from "./projectReducer";
import { initialState, Project } from "../../types/projectTypes/projectTypes";
import { 
    NEW_PROJECT_FORM, 
    GET_PROJECTS,
    ADD_NEW_PROJECT, 
    CURRENT_PROJECT 
} from "./actionTypes";


const ProjectState = (props: any) => {
    const projects = [
        {id: 1, name: "Project1"},
        {id: 2, name: "Project2"},
        {id: 3, name: "Project3"},
        {id: 4, name: "Project4"}
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

    return (
        <projectContext.Provider
            value={{
                newProjectForm: state.newProjectForm,
                projects: state.projects,
                selectedProject: state.selectedProject,
                showFormNewProject,
                getProjects,
                addNewProject,
                setCurrentProject,
            }}
        >
            {props.children}       
        </projectContext.Provider>
    )
}

export default ProjectState;