import { connectRouter } from "connected-react-router";
import { combineReducers } from "redux";

import { movies } from './movies'
import { search } from './search'

const createRootReducers = history => {
    return combineReducers({
        search,
        movies,
        router: connectRouter(history)
    })
}

export default createRootReducers