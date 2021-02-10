import { connectRouter } from "connected-react-router";
import { combineReducers } from "redux";

const createRootReducers = history => {
    return combineReducers({
        router: connectRouter(history)
    })
}

export default createRootReducers