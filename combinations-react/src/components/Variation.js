import React from 'react'

export default function Variation() {
  return (
    <>
    <div className='calc-box'>
      <form>
  
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
          <h2 className='result'>Result: </h2>
    </div>
    
    </>
      
    )
}
