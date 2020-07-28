export type Task = {
    id: string,
    projectId: string,
    name: string,
    description?: string,
    favorite: boolean,
    completed: boolean,
    createdDate: Date | null
}
export type Project = {
    id: string,
    name: string,
    tasks : Task[]
}

export interface ProjectInterface {
    newProjectForm: boolean,
    projects : Project[],
    selectedProject: Project | undefined,
    showFormNewProject(showCreatedProjects:boolean): void,
    getProjects(): void,
    addNewProject(project:Project): void,
    addNewTaskToProject(task: Task): void,
    setCurrentProject(project:Project): void,
}

export const initialState : ProjectInterface = {
    newProjectForm: false,
    projects: [
        {
            id:"", 
            name:"", 
            tasks:[
                {
                    id:"0", 
                    projectId:"", 
                    name:"", 
                    favorite:false, 
                    completed:false, 
                    createdDate: null
                }
            ]
        }
    ],
    selectedProject: undefined,
    showFormNewProject: () => null,
    getProjects: () => null,
    addNewProject: () => null,
    addNewTaskToProject: () => null,
    setCurrentProject: () => null
}