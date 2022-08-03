import React from 'react'
import { useState } from 'react';

export default function Variation() {


  const [result, setResult] = useState(['']);

  const submitHandler = e =>{
    e.preventDefault();
    const totalNumber = parseInt(e.target.total.value,10);
    const groupNumber = parseInt(e.target.total2.value, 10);
    
    function recursiveFactorial(numberToFactorial){
      if (numberToFactorial === 0)
      {
        return 1;
      }

      return numberToFactorial * recursiveFactorial(numberToFactorial-1)
    }

    function variationFormula(){
      const result = recursiveFactorial(totalNumber) / recursiveFactorial(totalNumber - groupNumber);
      return result
    }

    setResult(variationFormula());

    e.target.total.value = '';
    e.target.total2.value = '';
  }





  return (
    <>
    <div className='calc-box'>
      <form onSubmit={submitHandler}>
  
        <div className='numbers'>
  
          <div>
            <h2>Total number (n)</h2>
            <input type='number' name='total'></input>
          </div>
  
          <div>
            <h2>Group number (r)</h2>
            <input type='number' name='total2'></input>
          </div>
  
        </div>
  
          <div className='calculate-button'>
            <button type='submit'>CALCULATE</button>
          </div>
  
      </form>
    </div>
  
    <div className='div-result'>
          <h2 className='result'>Result: {result} </h2>
    </div>
    
    </>
      
    )
}
