import { ProjectInterface } from "../../types";
import { CommonActionType } from "../../types/commonTypes";
import { NEW_PROJECT_FORM } from "./actionTypes";

export default (state : ProjectInterface, action : CommonActionType ) => {
    switch (action.type) {
        case NEW_PROJECT_FORM:
            return {
                ...state    , 
                newProjectForm: !state.newProjectForm
            }
    
        default:
            return state;
    }
} 