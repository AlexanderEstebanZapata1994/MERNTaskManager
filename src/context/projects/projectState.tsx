import React from 'react';
import projectContext from "./projectContext";
import projectReducer from "./projectReducer";
import { initialState, Project } from "../../types/projectTypes/projectTypes";
import { NEW_PROJECT_FORM, ADD_NEW_PROJECT } from "./actionTypes";

const ProjectState = (props: any) => {
    
    // Dispatch to execute the actions
    const [state, dispatch] = React.useReducer(projectReducer, initialState);
    
    // Defining some actions
    const showFormNewProject = () => {
        dispatch({
            type: NEW_PROJECT_FORM
        })
    }

    const addNewProject = (project: Project) => {
        dispatch({
            type: ADD_NEW_PROJECT,
            payload: project
        })
    }

    return (
        <projectContext.Provider
            value={{
                newProjectForm: state.newProjectForm,
                projects: state.projects,
                showFormNewProject,
                addNewProject
            }}
        >
            {props.children}       
        </projectContext.Provider>
    )
}

export default ProjectState;