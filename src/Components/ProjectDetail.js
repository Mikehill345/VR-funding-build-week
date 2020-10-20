import React, { useEffect, useState } from 'react'
import { useParams, useHistory } from 'react-router-dom'
import { fetchProjectDetail, deleteProject } from '../actions/index'
import { connect } from 'react-redux'


const ProjectDetail = ({ fetchProjectDetail, project, deleteProject }) => {
    const { id } = useParams()
    const history = useHistory()

    useEffect(() => {
        fetchProjectDetail(id)
    }, [])

    const projectDelete = (e) => {
        deleteProject(id)
        history.pushState('/dashboard')
    }

    return (
        <div>
            <h2>{project.project_name}</h2>
            <p>{project.project_description}</p>
            <p>{project.project_goal}</p>
            <button onClick={() => {history.push(`/projectEdit/${id}`)}}>Edit</button>
            <button onClick={() => {projectDelete()}}>Delete</button>
        </div>
    )
}
const mapStateToProps = (state) => {
    return {
        project: state.project
    }
}
export default connect(mapStateToProps, { fetchProjectDetail, deleteProject })(ProjectDetail)
