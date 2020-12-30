import React from 'react';
import './Result.css'
import {useSelector} from "react-redux";

export default function Result() {

  const result = useSelector(({counter:{result}}) => result)

  return (<div className='result'>{result}</div>)
}