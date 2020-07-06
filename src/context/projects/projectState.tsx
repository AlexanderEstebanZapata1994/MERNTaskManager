import React from 'react';
import projectContext from "./projectContext";
import projectReducer from "./projectReducer";
import { initialState } from "../../types/projectTypes/projectTypes";
import { NEW_PROJECT_FORM } from "./actionTypes";

const ProjectState = (props: any) => {
    
    // Dispatch to execute the actions
    const [state, dispatch] = React.useReducer(projectReducer, initialState);
    
    //Some functions for the CRUD

    const showFormNewProject = () => {
        dispatch({
            type: NEW_PROJECT_FORM
        })
    }

    return (
        <projectContext.Provider
            value={{
                newProjectForm: state.newProjectForm,
                showFormNewProject
            }}
        >
            {props.children}       
        </projectContext.Provider>
    )
}

export default ProjectState;