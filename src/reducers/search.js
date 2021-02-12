const CHANGE_VALUE = 'CHANGE_VALUE'

let initialState = {
    value: ''
}

export const search = (state = initialState, {type, payload}) => {
    switch (type) {
        case CHANGE_VALUE:
            return {
                ...state,
                value: payload
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