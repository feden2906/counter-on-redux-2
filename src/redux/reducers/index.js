import {counterReducer} from './countet-reducer'
import {combineReducers} from "redux";

export const reducer = combineReducers({counter: counterReducer})