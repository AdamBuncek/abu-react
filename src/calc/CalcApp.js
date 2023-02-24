import React, {useState} from 'react';
import CalculatorForm from './calculator/CalculatorForm';
import './CalcApp.css';

const title = "React kalkulačka";

const CalcApp = () => {
  const [xState, setXState] = useState(0);
  const [yState, setYState] = useState(0);

  const inputXonChange = (event) =>{
    console.log(event.target.value);
    setXState(event.target.value);
  }
  
  const inputYonChange = (event) =>{
    console.log(event.target.value);
    setYState(event.target.value);
  }

  return (
    <div className="App">
        <h1>{title}</h1>
        <CalculatorForm
          xOnChange = {inputXonChange}
          yOnChange = {inputYonChange}
          x = {xState}
          y = {yState}
        />
    </div>
  );
}

export default CalcApp;
