/* eslint-disable no-eval */
import React, {useState} from 'react'

export const Calculadora = () => {
  const [result, setResult] = useState('');

  const handleClick = (e) => {
    setResult(result.concat(e.target.name));      
  };

  const clear = () => {
    setResult('');
  };

  const backspace = () => {
    setResult(result.slice(0, -1));
  };

  const calculate = () => {    
    try {
      let sMOriginal = "x";
      let sMNuevo = "*";
      let sDOriginal = "÷";
      let sDNuevo = "/";

      let nuevoResult1 = result.replace(sMOriginal, sMNuevo);
      let nuevoResult2 = nuevoResult1.replace(sDOriginal, sDNuevo);


      setResult(eval(nuevoResult2).toString());
    } catch (error) {
      setResult('Error');
    }
  };

  return (
    <div className='calculadora'>
        <input type="text" value={result} />
      <div className="keypad">
        <button className="operator" onClick={clear} id="clear">C</button>
        <button className="operator flecha" onClick={backspace} id="backspace">←</button>
        <button className="operator" name="÷" onClick={handleClick}>÷</button>
        <button name="7" onClick={handleClick}>7</button>
        <button name="8" onClick={handleClick}>8</button>
        <button name="9" onClick={handleClick}>9</button>
        <button className="operator" name="x" onClick={handleClick}>x</button>
        <button name="4" onClick={handleClick}>4</button>
        <button name="5" onClick={handleClick}>5</button>
        <button name="6" onClick={handleClick}>6</button>
        <button className="operator" name="-" onClick={handleClick}>-</button>
        <button name="1" onClick={handleClick}>1</button>
        <button name="2" onClick={handleClick}>2</button>
        <button name="3" onClick={handleClick}>3</button>
        <button className="operator" name="+" onClick={handleClick}>+</button>
        <button name="0" onClick={handleClick}>0</button>
        <button name="." onClick={handleClick}>.</button>
        <button className="operator igual" onClick={calculate} id="result">=</button>
      </div>
    </div>
  )
}
