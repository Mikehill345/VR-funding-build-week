
import * as yup from 'yup';


export default yup.object().shape({
    username:
    yup
    .string()
    .required('Name is a required field')
    .min(1, 'Name must be atleast 2 characters'),

    email: 
    yup
    .string()
    .required('Email is a required field'),

    password: 
    yup
    .string()
    .required('Password is a required field')
    .min(5, 'Password must be atleast 5 characters')
})

