import React from 'react'
import { useHistory } from 'react-router-dom'

const ProjectList = ({ project }) => {
    const history = useHistory()


    return (
        <div className='project-list'>
            <h1>{project.project_name}</h1>
            <p>{project.project_description}</p>
            <p>{project.project_goal}</p>
            <button onClick={() => {history.push(`/project/${project.id}`)}}>See More</button>
        </div>
    )
}


export default ProjectList
