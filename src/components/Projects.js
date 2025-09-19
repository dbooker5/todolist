import React, {useState} from 'react'; 
import { useSelectedProjectValue } from '../context/selected-project-context';
import { useProjectsValue } from '../context/projects-context';

export const Projects = ({activeValue = null}) => {
    const [active, setActive] = useState(activeValue);
    const {setSelectedProject} = useSelectedProjectValue();
    const {projects} = useProjectsValue();

    console.log(projects)

    return (
        projects &&
        projects.map(project => (
            <li
                key={project.projectid}
                data-docid={project.docId}
                data-testid="project-action"
                className={
                    active === project.projectid 
                    ? 'active sidebar__project' 
                    : 'sidebar__project'
                }
                onKeyDown={() => {
                    setActive(project.projectid);
                    setSelectedProject(project.projectid);
                }}
                onClick={() => {
                    setActive(project.projectid);
                    setSelectedProject(project.projectid);
                }}
                >
                    {('Project', JSON.stringify(project.name))}
                </li>
        ))
    );
};
                   