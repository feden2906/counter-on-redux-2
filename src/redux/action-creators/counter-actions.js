import {MULTIPLY, RESET} from "../action-type";

export const multiply = (num) => ({type: MULTIPLY, payload: num})
export const reset = () => ({type: RESET})
export const setValueReactInput = (value) => ({type: "SET_VALUE_REACT_INPUT", payload: value})
export const submitNumber = () => ({type: "SUBMIT_NUMBER"})