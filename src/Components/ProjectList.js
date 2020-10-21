import React from 'react';
import { useHistory } from 'react-router-dom';
import ProjectListStyles from './ProjectListStyles';




const ProjectList = ({ project }) => {
    const history = useHistory()


    return (
        <ProjectListStyles>
        <div className='card'>
            <div className='container'>
            <h4><b>{project.project_name}</b></h4>
            <p>{project.project_description}</p>
            <p>Goal: $ {project.project_goal}</p>
            </div>
            <button onClick={() => {history.push(`/project/${project.id}`)}}>See More</button>
        </div>
        </ProjectListStyles>
    )
}


export default ProjectList
