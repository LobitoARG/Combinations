import React from 'react'

export default function Variation() {
  return (
    <div className='bg-blue-200'>
    <div className='flex justify-around mt-5'>
      <div>
        <h2 className='text-center'>Total number</h2>
        <input typeof='number'></input>
      </div>
      <div>
        <h2 className='text-center'>Group number</h2>
        <input typeof='number'></input>
      </div>
    </div>
    <div className='text-center mt-5'>
      <button className='px-5 py-2'>Calculate</button>
    </div>
    <div className='border-solid w-screen mt-5 pb-5'>
      <h2 className='text-center'>Result: 300</h2>
    </div>
  </div>
  )
}
