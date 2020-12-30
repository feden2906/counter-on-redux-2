import React from 'react';
import './InputWrapper.css'
import {useDispatch, useSelector} from "react-redux";
import {setValueReactInput, submitNumber} from "../../../redux/action-creators";

export default function InputWrapper() {

  const dispatch = useDispatch()
  const showError = useSelector(({counter: {showError}}) => showError)

  return (
      <div className='input-wrapper'>
        <p><b>Число:</b></p>
        <input onInput={(e) => dispatch(setValueReactInput(parseInt(e.currentTarget.value)))}
               className={showError ? 'input error' : 'input'}/>
        <button onClick={() => dispatch(submitNumber())} className='btn2'>Submit</button>
      </div>
  );
}
