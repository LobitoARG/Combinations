import React from 'react'
import { useState } from 'react';

export default function Permutation() 
{

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

    function permutationFormula(){
      const result = recursiveFactorial(totalNumber) / recursiveFactorial(totalNumber - groupNumber);
      return result
    }

    setResult(permutationFormula());

    e.target.total.value = '';
    e.target.total2.value = '';
  }
  
  return (
    <>
    <div className='bg-green-200'>
    <div className='flex justify-around mt-5'>
      <form onSubmit={submitHandler}>
      <h2 className='text-center'>Total number (n)</h2>
      <input type='number' name='total'></input>

      <h2 className='text-center'>Group number (r)</h2>
      <input type='number' name='total2'></input>
      <button className='px-5 py-2' type='submit'>Calculate</button>
      </form>

    <div className='border-solid pb-5 w-screen mt-5'>
      <h2 className='text-center'>Result:{result}</h2>
    </div>
    </div>
    </div>

    </>
    
  )
}
