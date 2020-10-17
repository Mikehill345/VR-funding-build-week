import axiosWithAuth from '../utils/axiosWithAuth'
import axios from 'axios'

export const SIGNIN_START = 'SIGNIN_START'
export const SIGNIN_SUCCESS = 'SIGNIN_SUCCESS'
export const SIGNIN_FAILURE = 'SIGNIN_FAILURE'


export const signin = (creds) => (dispatch) =>{
    dispatch({type:SIGNIN_START})
    return axiosWithAuth().post('somehttps', creds)
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
    .post('somehttps', user)
    .then((res) => {
        dispatch({type: SIGNUP_SUCCESS, payload: res.data})
    })
    .catch((err) => {
        dispatch({type: SIGNUP_FAILURE, payload: err.message})
    })
}

export const ADD_ITEM_START = 'ADD_ITEM_START'
export const ADD_ITEM_SUCCESS = 'ADD_ITEM_SUCCESS'
export const ADD_ITEM_FAILURE = 'ADD_ITEM_FAILURE'

export const addItem = (item) => (dispatch) => {
    dispatch({type: ADD_ITEM_START})
    return axiosWithAuth()
    .post('somehttps', item)
    .then((res) => {
        dispatch({type: ADD_ITEM_START, payload: res.data})
    })
    .catch((err) => {
        dispatch({type: ADD_ITEM_FAILURE, payload: err.message})
    })
}

export const FETCH_ITEM_START = 'FETCH_ITEM_START'
export const FETCH_ITEM_SUCCESS = 'FETCH_ITEM_SUCCESS'
export const FETCH_ITEM_FAILURE = 'FETCH_ITEM_FAILURE'

export const fetchItems = () => (dispatch) => {
    dispatch({type: FETCH_ITEM_START})
    return axiosWithAuth()
    .get('somehttps')
    .then((res) => {
        dispatch({type: FETCH_ITEM_SUCCESS, payload: res.data})
    })
    .catch((err) => {
        dispatch({type: FETCH_ITEM_FAILURE, payload: err.message})
    })
}

export const FETCH_ITEM_DETAIL_START = 'FETCH_ITEM_DETAIL_START'
export const FETCH_ITEM_DETAIL_SUCCESS = 'FETCH_ITEM_DETAIL_SUCCESS'
export const FETCH_ITEM_DETAIL_FAILURE = 'FETCH_ITEM_DETAIL_FAILURE'

export const fetchItemDetail = (id) => (dispatch) => {
    dispatch({type: FETCH_ITEM_DETAIL_START})
    return axiosWithAuth()
    .get(`somehttps/${id}`)
    .then((res) => {
        dispatch({type: FETCH_ITEM_DETAIL_SUCCESS, payload: res.data})
    })
    .catch((err) => {
        dispatch({type: FETCH_ITEM_DETAIL_FAILURE, payload: err.message})
    })
}

export const DELETE_ITEM_START = 'DELETE_ITEM_START'
export const DELETE_ITEM_SUCCESS = 'DELETE_ITEM_SUCCESS'
export const DELETE_ITEM_FAILURE = 'DELETE_ITEM_FAILURE'

export const deleteItem = (item) => (dispatch) => {
    dispatch({type: DELETE_ITEM_START})
    return axiosWithAuth()
    .delete(`somehttps/${item.id}`, item)
    .then((res) => {
        dispatch({type: DELETE_ITEM_SUCCESS, payload: res.data})
    })
    .catch((err) => {
        dispatch({type: DELETE_ITEM_FAILURE, payload: err.message})
    })
}

export const EDIT_ITEM_START = 'EDIT_ITEM_START'
export const EDIT_ITEM_SUCCESS = 'EDIT_ITEM_SUCCESS'
export const EDIT_ITEM_FAILURE = 'EDIT_ITEM_FAILURE'

export const editItem = (item) => (dispatch) => {
    dispatch({type: EDIT_ITEM_START})
    return axiosWithAuth()
    .delete(`somehttps/${item.id}`, item)
    .then((res) => {
        dispatch({type: EDIT_ITEM_SUCCESS, payload: res.data})
    })
    .catch((err) => {
        dispatch({type: EDIT_ITEM_FAILURE, payload: err.message})
    })
}