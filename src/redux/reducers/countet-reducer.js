import {MULTIPLY, RESET, SET_VALUE_REACT_INPUT, SUBMIT_NUMBER} from '../action-type'

const initialState = {
  result: 0, showError: false, inputValue: ''
}
export const counterReducer = (state = initialState, action) => {

  const {result, showError, inputValue} = state
  const {payload} = action

  switch (action.type) {

    case MULTIPLY: {
      const num = payload + result;
      return {...state, result: (num < 0) ? 0 : num}
    }

    case RESET: {
      return {...state, result: 0}
    }

    case SET_VALUE_REACT_INPUT: {
      if (isNaN(payload)) {

        return {...state, showError: true}
      } else {
        return {...state, showError: false, inputValue: payload}
      }
    }

    case SUBMIT_NUMBER: {
      return showError
          ? state
          : {...state, result: (inputValue + result < 0) ? 0 : inputValue + result}
    }


    default: {
      return state
    }
  }
}