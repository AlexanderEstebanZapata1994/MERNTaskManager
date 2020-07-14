export type Project = {
    id: number,
    name: string
}

export interface ProjectInterface {
    newProjectForm: boolean,
    projects : Project[],
    selectedProject: Project,
    showFormNewProject(showCreatedProjects:boolean): void,
    getProjects(): void,
    addNewProject(project:Project): void,
    setCurrentProject(project:Project): void,
}

export const initialState : ProjectInterface = {
    newProjectForm: false,
    projects: [],
    selectedProject: {id: -1, name:''},
    showFormNewProject: () => null,
    getProjects: () => null,
    addNewProject: () => null,
    setCurrentProject: () => null
}