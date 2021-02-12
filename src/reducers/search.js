const CHANGE_VALUE = 'CHANGE_VALUE'
const CHANGE_RADIO = 'CHANGE_RADIO'

let initialState = {
    value: '',
    checked: 'all'
}

export const search = (state = initialState, {type, payload}) => {
    switch (type) {
        case CHANGE_VALUE:
            return {
                ...state,
                value: payload
            }
        case CHANGE_RADIO:
            return {
                ...state,
                checked: payload
            }
        default: 
            return state
    }
}

export const changeValue = value => dispatch => {
    dispatch({
        type: CHANGE_VALUE,
        payload: value
    })
}

export const changeRadio = value => dispatch => {
    dispatch({
        type: CHANGE_RADIO,
        payload: value
    })
}