import { connectRouter } from "connected-react-router";
import { combineReducers } from "redux";

import { movies } from './movies'

const createRootReducers = history => {
    return combineReducers({
        movies,
        router: connectRouter(history)
    })
}

export default createRootReducers