import {applyMiddleware, createStore } from "redux"
import { combineReducers } from "redux"
import {profileReducer} from "./profile-reducer"
import thunkMiddleware from "redux-thunk"

const reducer = combineReducers({
    profile: profileReducer
})

export type AppRootStateType = ReturnType<typeof reducer>

export const store = createStore(reducer, applyMiddleware(thunkMiddleware))


