import {getMovies as getMoviesApi} from '../api'

const GET_MOVIES_START = 'GET_MOVIES_START'
const GET_MOVIES_SUCCESS = 'GET_MOVIES_SUCCESS'
const GET_MOVIES_FAILURE = 'GET_MOVIES_FAILURE'


let initialState = {
    movies: [],
    error: ''
}

export const movies = (state = initialState, {type, payload}) => {
    switch(type) {
        case GET_MOVIES_SUCCESS:
            return {
                ...state,
                movies: payload
            }
        default:
            return state
    }
}

export const getMovies = (name = 'matrix') => async dispatch => {
    dispatch({
        type: GET_MOVIES_START
    })
    try {
        const movies = await getMoviesApi(name)
        dispatch({
            type: GET_MOVIES_SUCCESS,
            payload: movies
        })
    } catch (err) {
        dispatch({
            type: GET_MOVIES_FAILURE,
            payload: err,
            error: true
        })
    }
}