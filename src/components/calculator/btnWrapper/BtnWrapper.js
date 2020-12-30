import React from 'react';
import './BtnWrapper.css'
import {useDispatch} from "react-redux";
import {multiply, reset} from "../../../redux/action-creators";

export default function BtnWrapper() {

  const dispatch = useDispatch()

  return (
      <div className='btn-wrapper'>
        <button onClick={() => dispatch(multiply(1))} className='btn'>+ 1</button>
        <button onClick={() => dispatch(multiply(100))} className='btn'>+ 100</button>
        <button onClick={() => dispatch(multiply(-1))} className='btn'>- 1</button>
        <button onClick={() => dispatch(multiply(-100))} className='btn'>- 100</button>
        <button onClick={() => dispatch(reset())} className='btn'>Reset</button>
      </div>
  );
}
