import { routerMiddleware } from "connected-react-router"
import { createBrowserHistory } from "history"
import { applyMiddleware, createStore } from "redux"
import { composeWithDevTools } from "redux-devtools-extension"
import thunk from "redux-thunk"

import createRootReducers from "./reducers"

export const history = createBrowserHistory()
const middlewares = [thunk, routerMiddleware(history)]

export const store = createStore(
    createRootReducers(history),
    composeWithDevTools(applyMiddleware(...middlewares))
)