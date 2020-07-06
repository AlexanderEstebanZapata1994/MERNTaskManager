import { ProjectInterface } from "../../types";
import { CommonActionType } from "../../types/commonTypes";
import { NEW_PROJECT_FORM, ADD_NEW_PROJECT } from "./actionTypes";


export default (state : ProjectInterface, action : CommonActionType ) => {
    switch (action.type) {
        case NEW_PROJECT_FORM:
            return {
                ...state, 
                newProjectForm: action.payload
            }
        case ADD_NEW_PROJECT:
            return {
                ...state,
                proyects: state.projects.push(action.payload)
            }
        default:
            return state;
    }
} 