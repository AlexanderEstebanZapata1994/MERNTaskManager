import React from 'react';
import ProjectItemRender from "../projectItem";
import { Project } from "../../../types/projectTypes/projectTypes";
import { withStyles, Theme, List, Typography } from '@material-ui/core';
import { Divider } from '@material-ui/core';
import projectContext from 'src/context/projects/projectContext';
 
const ProjectList = ({visible, classes} : ProjectListProps) => {

    const {projects, getProjects, setCurrentProject} = React.useContext(projectContext);

    React.useEffect(() => {
        getProjects();
    }, [])


    return ( 
        <>
            {visible &&
            <>
                <Divider />
                <Typography variant="h5" align="center" className={classes.title}>Your Projects</Typography>
                <List className={classes.roots}>
                    {
                        projects.map((project : Project) =>  
                        <ProjectItemRender 
                            key={project.id} 
                            project={project} 
                            setCurrentProject={setCurrentProject}
                        />)
                    }
                </List>
            </>
            }
        </>
    )
}

interface ProjectListProps {
    visible: boolean, 
    classes?: any
}
 
const styles = (theme : Theme) => ({
    roots: {
        overflowY : "auto" as "auto",
        maxHeight: '250px',
    },
    title: {
        paddingTop: (theme.spacing(1) + 2)
    }
})
export default withStyles (styles) (ProjectList);