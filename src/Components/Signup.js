import React, { useEffect, useState } from 'react';
import * as yup from 'yup';
import formSchema from './formSchema';
import { useHistory } from 'react-router-dom';
import { signup } from '../actions/index';
import { connect } from 'react-redux'
 
const Signup = () => {
    const [ user, setUser ] = useState({username: '', email: '', password: ''});
    const [ error, setError ] = useState({username: '', email: '', password: ''});
    const [ disabled, setDisabled ] = useState(true);

    const history = useHistory()

    const submitHandler = event => {
        debugger;
        event.preventDefault();
        const newUser = {
            username: user.username,
            password: user.password,
            email: user.email,
        }
        signup(user)
        history.push('/')
        // axios.post('https://virtualrealityfunding.herokuapp.com/auth/login', newUser)
        // .then(() => {
        //     history.push('/dashboard')
        // })
        // .catch((err) => {
        //     console.log(err)
        // })
    }

    const setUserError = (name, value) => {
        yup
        .reach(formSchema, name)
        .validate(value)

        .then(() => setError({...error, [name]: '' }))
        .catch((err) => {
            setError({...error, [name]: err.errors[0] })})


    }


    const change = event => {
        const { name, value } = event.target
        setUserError(name, value)
        setUser({...user, [name]: value})
    }

    useEffect(() => {
        formSchema.isValid(user).then((valid) => {
            setDisabled(!valid)
        })
    }, [user])

    return (
        <>
        <form onSubmit={submitHandler} autoComplete='off'>
            <h2>Sign Up</h2>
            <div className='name-container'>
                <label>
                    Name: 
                    <input type='text' name='username' onChange={change} value={user.username}/>
                </label>
            </div>
            <div className='email-container'>
                <label>
                    Email:
                    <input type='text' name='email' onChange={change} value={user.email} />
                </label>
            </div>
            <div className='password-container'>
                <label>
                    Password:
                    <input type='text' name='password' onChange={change} value={user.password} />
                </label>
            </div>
            <div>
                {error.username}
                {error.password}
            </div>
            <button>Submit</button> 
        </form>
        </>
    )
}
const mapStateToProps = (state) => {
    return {

    }
}

export default connect(mapStateToProps, { signup })(Signup)
