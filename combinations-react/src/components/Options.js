import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Options() {
  return (
    <>
    <div className="options">
        <NavLink to='/combination' exact><button className='px-5 py-2'>Combination</button></NavLink>
        <NavLink to='/permutation' exact><button className='px-5 py-2'>Permutation</button></NavLink>
        <NavLink to='variation' exact><button className='px-5 py-2'>Variation</button></NavLink>
    </div>
    </>
  )
}
