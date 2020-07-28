import { ProjectInterface } from "../../types";
import { CommonActionType } from "../../types/commonTypes";
import { 
    NEW_PROJECT_FORM, 
    GET_PROJECTS,
    ADD_NEW_PROJECT, 
    CURRENT_PROJECT,
    ADD_NEW_TASK
} from "./actionTypes";


export default (state : ProjectInterface, action : CommonActionType ) => {
    switch (action.type) {
        case NEW_PROJECT_FORM:
            return {
                ...state, 
                newProjectForm: action.payload
            }
        case GET_PROJECTS:
            return {
                ...state,
                projects: action.payload
            }
        case ADD_NEW_PROJECT:
            return {
                ...state,
                projects: [...state.projects, action.payload],
                newProjectForm: false
            }
        case ADD_NEW_TASK: 
            return {
                ...state,
                projects: state.projects.forEach(project => {
                    if (project.id === action.payload.projectId){
                        project.tasks.push(action.payload);
                    }
                })
            }
        case CURRENT_PROJECT:
            return {
                ...state,
                selectedProject: state.projects.filter(project => project.id === action.payload)[0]
            }
        default:
            return state;
    }
} 