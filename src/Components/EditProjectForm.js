import React, { useState } from 'react'
import { connect } from 'react-redux'
import { editProject, EditProject } from '../actions/index'

const EditProjectForm = (props) => {
    const [formValues, setFormValues] = useState({
        project_name: '',
        project_description: '',
        project_goal: '',
    })

    const onSubmit = (e) => {
        e.preventDefault()
        editProject()
    }

    const handleChange = (e) => {
        setFormValues({ ...formValues, [e.target.value]: e.target.name })
    }

    return (
        <div>
            <form onSubmit={onSubmit}>
                <input
                    type='text'
                    name='project_name'
                    value=''
                    onChange={handleChange}
                    placeholder='Project Name'
                />
                <input
                    type='text'
                    name='project_description'
                    value=''
                    onChange={handleChange}
                    placeholder='Description of your project'
                />
                <input
                    type='text'
                    name='project_goal'
                    value=''
                    onChange={handleChange}
                    placeholder='Whats your goal?'
                />
                <button>Submit</button>
            </form>
        </div>
    )
}
const mapStateToProps = (state) => {
    return {

    }
}

export default connect(mapStateToProps, { EditProject })(EditProjectForm)
