import axiosWithAuth from '../utils/axiosWithAuth'
import axios from 'axios'

export const SIGNIN_START = 'SIGNIN_START'
export const SIGNIN_SUCCESS = 'SIGNIN_SUCCESS'
export const SIGNIN_FAILURE = 'SIGNIN_FAILURE'


export const signin = (creds) => (dispatch) =>{
    dispatch({type:SIGNIN_START})
    return axiosWithAuth()
    .post('/auth/login', creds)
    .then((res) => {
        localStorage.setItem('token', res.data.token)
        dispatch({type: SIGNIN_SUCCESS, payload: res.data})
    })
    .catch((err) => {
        console.log(err)
        dispatch({type: SIGNIN_FAILURE, payload: err.message})
    })
}

export const SIGNUP_START = 'SIGNUP_START'
export const SIGNUP_SUCCESS = 'SIGNUP_SUCCESS'
export const SIGNUP_FAILURE = 'SIGNUP_FAILURE'

export const signup = (user) => (dispatch) => {
    dispatch({type: SIGNUP_START})
    return axios
    .post('https://virtualrealityfunding.herokuapp.com/auth/register', user)
    .then((res) => {
        console.log('inside the action',res)
        dispatch({type: SIGNUP_SUCCESS, payload: res.data})
    })
    .catch((err) => {
        dispatch({type: SIGNUP_FAILURE, payload: err.message})
    })
}

export const ADD_PROJECT_START = 'ADD_PROJECT_START'
export const ADD_PROJECT_SUCCESS = 'ADD_PROJECT_SUCCESS'
export const ADD_PROJECT_FAILURE = 'ADD_PROJECT_FAILURE'

export const addProject = (project) => (dispatch) => {
    dispatch({type: ADD_PROJECT_START})
    return axiosWithAuth()
    .post('/projects', project)
    .then((res) => {
        dispatch({type: ADD_PROJECT_SUCCESS, payload: res.data})
    })
    .catch((err) => {
        dispatch({type: ADD_PROJECT_FAILURE, payload: err.message})
    })
}

export const FETCH_PROJECT_START = 'FETCH_PROJECT_START'
export const FETCH_PROJECT_SUCCESS = 'FETCH_PROJECT_SUCCESS'
export const FETCH_PROJECT_FAILURE = 'FETCH_PROJECT_FAILURE'

export const fetchProjects = () => (dispatch) => {
    dispatch({type: FETCH_PROJECT_START})
    return axiosWithAuth()
    .get('/projects')
    .then((res) => {
        dispatch({type: FETCH_PROJECT_SUCCESS, payload: res.data})
    })
    .catch((err) => {
        dispatch({type: FETCH_PROJECT_FAILURE, payload: err.message})
    })
}

export const FETCH_PROJECT_DETAIL_START = 'FETCH_PROJECT_DETAIL_START'
export const FETCH_PROJECT_DETAIL_SUCCESS = 'FETCH_PROJECT_DETAIL_SUCCESS'
export const FETCH_PROJECT_DETAIL_FAILURE = 'FETCH_PROJECT_DETAIL_FAILURE'

export const fetchProjectDetail = (id) => (dispatch) => {
    dispatch({type: FETCH_PROJECT_DETAIL_START})
    return axiosWithAuth()
    .get(`/projects/${id}`)
    .then((res) => {
        dispatch({type: FETCH_PROJECT_DETAIL_SUCCESS, payload: res.data})
    })
    .catch((err) => {
        dispatch({type: FETCH_PROJECT_DETAIL_FAILURE, payload: err.message})
    })
}

export const DELETE_PROJECT_START = 'DELETE_PROJECT_START'
export const DELETE_PROJECT_SUCCESS = 'DELETE_PROJECT_SUCCESS'
export const DELETE_PROJECT_FAILURE = 'DELETE_PROJECT_FAILURE'

export const deleteProject = (id) => (dispatch) => {
    dispatch({type: DELETE_PROJECT_START})
    return axiosWithAuth()
    .delete(`/projects/${id}`)
    .then((res) => {
        dispatch({type: DELETE_PROJECT_SUCCESS, payload: res.data})
    })
    .catch((err) => {
        dispatch({type: DELETE_PROJECT_FAILURE, payload: err.message})
    })
}

export const EDIT_PROJECT_START = 'EDIT_PROJECT_START'
export const EDIT_PROJECT_SUCCESS = 'EDIT_PROJECT_SUCCESS'
export const EDIT_PROJECT_FAILURE = 'EDIT_PROJECT_FAILURE'

export const editProject = (project) => (dispatch) => {
    dispatch({type: EDIT_PROJECT_START})
    return axiosWithAuth()
    .put(`/projects/${project.id}`, project)
    .then((res) => {
        dispatch({type: EDIT_PROJECT_SUCCESS, payload: res.data})
    })
    .catch((err) => {
        dispatch({type: EDIT_PROJECT_FAILURE, payload: err.message})
    })
}