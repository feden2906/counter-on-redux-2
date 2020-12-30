import React from 'react';
import './BtnWrapper.css'
import {useDispatch} from "react-redux";
import {MULTIPLY, RESET} from "../../../redux/action-type";

export default function BtnWrapper() {

  const dispatch = useDispatch()

  return (
      <div className='btn-wrapper'>
        <button onClick={() => dispatch({type: MULTIPLY, payload: 1})} className='btn'>+ 1</button>
        <button onClick={() => dispatch({type: MULTIPLY, payload: 100})} className='btn'>+ 100</button>
        <button onClick={() => dispatch({type: MULTIPLY, payload: -1})} className='btn'>- 1</button>
        <button onClick={() => dispatch({type: MULTIPLY, payload: -100})} className='btn'>- 100</button>
        <button onClick={() => dispatch({type: RESET})} className='btn'>Reset</button>
      </div>
  );
}