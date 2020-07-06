export interface ProjectInterface {
    newProjectForm: boolean
    showFormNewProject(): void
}

export const initialState : ProjectInterface = {
    newProjectForm: false,
    showFormNewProject: () => null
}