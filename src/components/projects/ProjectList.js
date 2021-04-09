import React from 'react';
import ProjectSummary from './ProjectSummary';
import { Link } from 'react-router-dom';

const ProjectList = ({ projects }) => {
    return (
        <div className="project-list section">
            {projects && projects.map(item => (
                <Link to={'project/' + item.id} key={item.id}>
                    <ProjectSummary project={item}></ProjectSummary>
                </Link>
            ))}
        </div>
    )
}

export default ProjectList
