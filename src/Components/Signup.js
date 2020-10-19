import React, { useEffect, useState } from 'react';
import axiosWithAuth from '../utils/axiosWithAuth';
import axios from 'axios';
import * as yup from 'yup';
import formSchema from './formSchema';
import { useHistory } from 'react-router-dom';
import { signin } from '../actions/index';

const Signup = () => {
    const [ user, setUser ] = useState({name: '', email: '', password: ''});
    const [ error, setError ] = useState({name: '', email: '', password: ''});
    const [ disabled, setDisabled ] = useState(true);

    // const history = useHistory()

    const submitHandler = event => {
        event.preventDefault();
        const newUser = {
            name: user.name.trim(),
            password: user.password.trim(),
        }

        signin(newUser)

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
            console.log(err);
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
                    <input type='text' name='name' onChange={change} value={user.name}/>
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
                {error.name}
                {error.password}
            </div>
            <input disabled={disabled} type='submit' value='SIGN IN' />
        </form>
        </>
    )
}

export default Signup
