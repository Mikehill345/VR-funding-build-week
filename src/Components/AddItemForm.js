import React, { useState } from 'react'
import axiosWithAuth from '../utils/axiosWithAuth'
import { connect } from 'react-redux'

const AddItemForm = (props) => {
    const [formValues, setFormValues] = useState()

    const onSubmit = (e) => {
        e.preventDefault()
        axiosWithAuth()
        .post()
        .then((res) => {
            console.log(res)
        })
        .catch((err) => {
            console.log(err)
        })
    }

    const handleChange = (e) => {
        setFormValues({...formValues, [e.target.value]: e.target.name})
    }
    return (
        <div>
            <form onSubmit={onSubmit}>

            </form>
            
        </div>
    )
}
const mapStateToProps = () => {
    return{
        
    }
}

export default connect(mapStateToProps, {  })(AddItemForm)
