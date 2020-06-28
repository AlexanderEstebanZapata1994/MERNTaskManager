import React from 'react';
import projectContext from "./projectContext";
import projectReducer from "./projectReducer";

const ProjectState = (props: any) => {
    const initialState = {
        newProjectForm: false
    }
    // Dispatch to execute the actions
    const [state, dispatch] = React.useReducer(projectReducer, initialState);

    //Some functions for the CRUD

    return (
        <projectContext.Provider
            value={{projectsForm: state.newProjectForm}}
        >
            {props.children}       
        </projectContext.Provider>
    )
}

export default ProjectState;