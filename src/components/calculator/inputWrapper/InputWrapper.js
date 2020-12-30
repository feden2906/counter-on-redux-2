import React from 'react';
import './InputWrapper.css'
import {useDispatch, useSelector} from "react-redux";

export default function InputWrapper() {

  const dispatch = useDispatch()
  const showError = useSelector(({counter:{showError}}) => showError)

  return (
      <div className='input-wrapper'>
        <p><b>Число:</b></p>
        <input onInput={(e) => dispatch({type: "SET_VALUE_REACT_INPUT", payload: parseInt(e.currentTarget.value)})}
               className={showError ? 'input error' : 'input'}/>
        <button onClick={() => dispatch({type: "SUBMIT_NUMBER"})} className='btn2'>Submit</button>
      </div>
  );
}
