import React from 'react'

const ProjectList = (props) => {


    return (
        <div className='project-list'>
            <h1>{props.project_name}</h1>
            <p>{props.project_description}</p>
            <p>{props.project_goal}</p>
        </div>
    )
}


export default ProjectList
