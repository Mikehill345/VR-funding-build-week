import React from 'react'
import Styled from 'styled-components';


const testStyle = Styled.div`
h1{
    color: white;
}
`;


const Project = (props) => {
    return (
        <div>
            <testStyle>
            <h1>{props.project_name}</h1>
            <p>{props.project_description}</p>
            <p>{props.project_goal}</p>
            <button onClick={() => { }}>Edit Project</button>
            <button onClick={() => { }}>Delete Project</button>
            </testStyle>
        </div>
    )
}

export default Project
