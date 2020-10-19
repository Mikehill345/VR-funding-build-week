import React from 'react'


const Project = (props) => {
    return (
        <div>
            <h1>{props.project_name}</h1>
            <p>{props.project_description}</p>
            <p>{props.project_goal}</p>
            <button onClick={() => { }}>Edit Project</button>
            <button onClick={() => { }}>Delete Project</button>
        </div>
    )
}

export default Project
