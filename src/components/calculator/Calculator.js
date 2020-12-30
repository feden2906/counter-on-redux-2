import './Calculator.css'
import Title from "./title/Title";
import Result from "./result/Result";
import BtnWrapper from "./btnWrapper/BtnWrapper";
import InputWrapper from "./inputWrapper/InputWrapper";
import {useSelector} from "react-redux";

export default function Calculator() {

  const showError = useSelector(({counter:{showError}}) => showError)

  return (
      <div className='calc-wrapper'>
        <Title/>
        <Result/>
        <BtnWrapper/>
        <InputWrapper/>
        {showError && <p><b className="text-error">Потрібно вказати число</b></p>}
      </div>
  );
}