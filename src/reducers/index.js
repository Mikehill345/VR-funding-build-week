import {
    SIGNIN_START,
    SIGNIN_SUCCESS,
    SIGNIN_FAILURE,
    SIGNUP_START,
    SIGNUP_SUCCESS,
    SIGNUP_FAILURE,
    ADD_ITEM_START,
    ADD_ITEM_SUCCESS,
    ADD_ITEM_FAILURE,
    FETCH_ITEM_START,
    FETCH_ITEM_SUCCESS,
    FETCH_ITEM_FAILURE,
    FETCH_ITEM_DETAIL_START,
    FETCH_ITEM_DETAIL_SUCCESS,
    FETCH_ITEM_DETAIL_FAILURE,
    DELETE_ITEM_START,
    DELETE_ITEM_SUCCESS,
    DELETE_ITEM_FAILURE,
    EDIT_ITEM_START,
    EDIT_ITEM_SUCCESS,
    EDIT_ITEM_FAILURE
} from '../actions/index'



const initialState = {
    We: '',
    dont: '',
    know: '',
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
        case ADD_ITEM_START:
            return {
                ...state,

            }
        case ADD_ITEM_SUCCESS:
            return {
                ...state,

            }
        case ADD_ITEM_FAILURE:
            return {
                ...state,

            }
        case FETCH_ITEM_START:
            return {
                ...state,

            }
        case FETCH_ITEM_SUCCESS:
            return {
                ...state,

            }
        case FETCH_ITEM_FAILURE:
            return {
                ...state,

            }
        case FETCH_ITEM_DETAIL_START:
            return {
                ...state,

            }
        case FETCH_ITEM_DETAIL_SUCCESS:
            return {
                ...state,

            }
        case FETCH_ITEM_DETAIL_FAILURE:
            return {
                ...state,

            }
        case DELETE_ITEM_START:
            return {
                ...state,

            }
        case DELETE_ITEM_SUCCESS:
            return {
                ...state,

            }
        case DELETE_ITEM_FAILURE:
            return {
                ...state,

            }
        case EDIT_ITEM_START:
            return {
                ...state,

            }
        case EDIT_ITEM_SUCCESS:
            return {
                ...state,

            }
        case EDIT_ITEM_FAILURE:
            return {
                ...state,

            }
        default:
            return state
    }
}

export default reducer