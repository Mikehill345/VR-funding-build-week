import React, { useEffect, useState } from 'react';
import * as yup from 'yup';
import formSchema from './formSchema';
import { useHistory } from 'react-router-dom';
import { signin } from '../actions/index';
import { connect } from 'react-redux'
import SignInStyle from './SignInStyles'
import MainHeader from './MainHeader';


const SignIn = (props) => {
    const [user, setUser] = useState({ username: '', password: '' });
    const [error, setError] = useState({ username: '', password: '' });
    const [disabled, setDisabled] = useState(true);
    const history = useHistory()

    const submitHandler = event => {
        event.preventDefault();
        const newUser = {
            username: user.username,
            password: user.password,
            email: user.email,
        }
        props.signin(newUser)
        history.push('/dashboard')
        // axios
        // .post('https://virtualrealityfunding.herokuapp.com/auth/login', newUser)
        // .then((res) => {
        //     console.log(res.data)
        //     localStorage.setItem('token', res.data.token)
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

            .then(() => setError({ ...error, [name]: '' }))
            .catch((err) => {
                setError({ ...error, [name]: err.errors[0] })
            })


    }


    const change = event => {
        const { name, value } = event.target
        setUserError(name, value)
        setUser({ ...user, [name]: value })
    }

    useEffect(() => {
        formSchema.isValid(user).then((valid) => {
            setDisabled(!valid)
        })
    }, [user])

    return (
        <>
        <MainHeader />
        <SignInStyle>
            <div className='Form'>
            <form onSubmit={submitHandler} autoComplete='off'>
                <h2>Sign In</h2>

                <div className='name-container'>
                    <div>
                        <label htmlFor='username'>
                            Name
                        </label>
                    </div>
                    <input type='text' name='username' onChange={change} value={user.username} />
                </div>

                <div className='email-container'>
                    <div>
                        <label htmlFor='email'>
                            Email
                        </label>
                    </div>
                    <input type='email' name='email' onChange={change} value={user.email} />
                </div>

                <div className='password-container'>
                    <div>
                        <label htmlFor='password'>
                            Password
                        </label>
                    </div>
                    <input type='password' name='password' onChange={change} value={user.password} />
                </div>

                <div>
                    {error.username}
                    {error.password}
                </div>
                
                <button disabled={disabled}>Sign in</button>
            </form>
            </div>
            </SignInStyle>
        </>
    )
}


export default connect(null, { signin })(SignIn)
