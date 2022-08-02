import React from 'react'

export default function Permutation() 
{

  const submitHandler = e =>{
    e.preventDefault();
    const numero = parseInt(e.target.total.value,10);
    const numero2 = parseInt(e.target.total2.value, 10);
    
    function factorialRecursivo(n){
      if (n === 0)
      {
        return 1;
      }

      return n * factorialRecursivo(n-1)
    }

    function permutacion(){
      const resultado = factorialRecursivo(numero) / factorialRecursivo(numero - numero2);
      return resultado
    }

    console.log(permutacion())
    
  }
  


  return (
    <>
    <div className='bg-green-200'>
    <div className='flex justify-around mt-5'>
      <form onSubmit={submitHandler}>
      <h2 className='text-center'>Total number</h2>
      <input type='number' name='total'></input>

      <h2 className='text-center'>Group number</h2>
      <input type='number' name='total2'></input>
      <button className='px-5 py-2' type='submit'>Calculate</button>
      </form>

    <div className='border-solid pb-5 w-screen mt-5'>
      <h2 className='text-center'>Result: 200</h2>
    </div>
    </div>
    </div>

    </>
    
  )
}
