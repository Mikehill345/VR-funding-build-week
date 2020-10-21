import React, { useState } from 'react'
import { connect } from 'react-redux'
import { addProject } from '../actions/index'
import { useHistory } from 'react-router-dom'
import Header from './Header'
import { StyledForm, StyledInputOne, StyledButton} from './AddProjectFormStyles'

const AddProjectForm = ({ addProject }) => {

    const history = useHistory()
    const [formValues, setFormValues] = useState({
        project_name: '',
        project_description: '',
        project_goal: 0,
    })

    const onSubmit = (e) => {
        e.preventDefault()
        addProject(formValues)
        history.push('/dashboard')
    }

    const handleChange = (e) => {
        setFormValues({ ...formValues, [e.target.name]: e.target.value })
    }
    return (
        <div>
            <Header />
            <StyledForm onSubmit={onSubmit}>
                <StyledInputOne
                    type='text'
                    name='project_name'
                    value={formValues.project_name}
                    onChange={handleChange}
                    placeholder='Project Name'
                />
                <StyledInputOne
                    type='integer'
                    name='project_goal'
                    value={formValues.project_goal}
                    onChange={handleChange}
                    placeholder='Whats your goal?'
                />
                <textArea
                    type='text'
                    name='project_description'
                    value={formValues.project_description}
                    onChange={handleChange}
                    placeholder='Description of your project'
                    rows='5'
                    className='text-area'
                    >
                    </textArea>
                <StyledButton>Submit</StyledButton>
            </StyledForm>
        </div>
    )
}


export default connect(null, { addProject })(AddProjectForm)
