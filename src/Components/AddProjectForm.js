import React, { useState } from 'react'
import { connect } from 'react-redux'
import { addProject } from '../actions/index'

const AddProjectForm = (props) => {
    const [formValues, setFormValues] = useState({
        project_name: '',
        project_description: '',
        project_goal: '',
    })

    const onSubmit = (e) => {
        e.preventDefault()
        props.addProject(formValues)
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
                    placeholder=''
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
const mapStateToProps = () => {
    return {

    }
}

export default connect(mapStateToProps, { addProject })(AddProjectForm)
