import {
    SIGNIN_START,
    SIGNIN_SUCCESS,
    SIGNIN_FAILURE,
    SIGNUP_START,
    SIGNUP_SUCCESS,
    SIGNUP_FAILURE,
    ADD_PROJECT_START,
    ADD_PROJECT_SUCCESS,
    ADD_PROJECT_FAILURE,
    FETCH_PROJECT_START,
    FETCH_PROJECT_SUCCESS,
    FETCH_PROJECT_FAILURE,
    FETCH_PROJECT_DETAIL_START,
    FETCH_PROJECT_DETAIL_SUCCESS,
    FETCH_PROJECT_DETAIL_FAILURE,
    DELETE_PROJECT_START,
    DELETE_PROJECT_SUCCESS,
    DELETE_PROJECT_FAILURE,
    EDIT_PROJECT_START,
    EDIT_PROJECT_SUCCESS,
    EDIT_PROJECT_FAILURE
} from '../actions/index'



const initialState = {
    projects:[],
    error:'',
    isLoading:true,

}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case SIGNIN_START:
            return {
                ...state,

            }
        case SIGNIN_SUCCESS:
            return {
                ...state,

            }
        case SIGNIN_FAILURE:
            return {
                ...state,

            }
        case SIGNUP_START:
            return {
                ...state,

            }
        case SIGNUP_SUCCESS:
            return {
                ...state,

            }
        case SIGNUP_FAILURE:
            return {
                ...state,

            }
        case ADD_PROJECT_START:
            return {
                ...state,
                isLoading:true
            }
        case ADD_PROJECT_SUCCESS:
            return {
                ...state,
                isLoading:false,
                projects: action.payload
            }
        case ADD_PROJECT_FAILURE:
            return {
                ...state,
                isLoading:false,
                error: 'Something went wrong'
            }
        case FETCH_PROJECT_START:
            return {
                ...state,
                isLoading:true
            }
        case FETCH_PROJECT_SUCCESS:
            return {
                ...state,
                isLoading:false,
                projects: action.payload
            }
        case FETCH_PROJECT_FAILURE:
            return {
                ...state,
                isLoading:false,
                error:'something went wrong whoops'
            }
        case FETCH_PROJECT_DETAIL_START:
            return {
                ...state,

            }
        case FETCH_PROJECT_DETAIL_SUCCESS:
            return {
                ...state,

            }
        case FETCH_PROJECT_DETAIL_FAILURE:
            return {
                ...state,

            }
        case DELETE_PROJECT_START:
            return {
                ...state,

            }
        case DELETE_PROJECT_SUCCESS:
            return {
                ...state,

            }
        case DELETE_PROJECT_FAILURE:
            return {
                ...state,

            }
        case EDIT_PROJECT_START:
            return {
                ...state,

            }
        case EDIT_PROJECT_SUCCESS:
            return {
                ...state,

            }
        case EDIT_PROJECT_FAILURE:
            return {
                ...state,

            }
        default:
            return state
    }
}

export default reducer