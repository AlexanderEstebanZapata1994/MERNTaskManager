export type Project = {
    id: number,
    name: string
}

export interface ProjectInterface {
    newProjectForm: boolean,
    projects : Project[],
    showFormNewProject(showCreatedProjects:boolean): void,
    addNewProject(project:Project): void,
}

export const initialState : ProjectInterface = {
    newProjectForm: false,
    projects:  [
        {id: 1, name: "Project1"},
        {id: 2, name: "Project2"},
        {id: 3, name: "Project2"},
        {id: 4, name: "Project8888"}
    ],
    showFormNewProject: () => null,
    addNewProject: () => null
}