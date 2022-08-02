import React from 'react'
import '../index.css'
import dog from '../assets/dog.png'
import Combination from './Combination'
import Permutation from './Permutation'
import Variation from './Variation'
import Options from './Options'
import {Routes, Route} from 'react-router-dom'

export default function Main() {
  return (
    <div className='w-screen h-[100px] z-10 fixed drop-shadow-lg'>
      <div className='px-2 flex justify-between items-center w-full h-full'>
        <img src={dog} alt='dog' className='max-h-10'></img>
        <button className='px-8 py-3'>Dark Mode</button>
        <button className='px-8 py-3'>Language Mode</button>
      </div>
      <div className='border-solid bg-green-800 h-[2px] w-screen'>
      </div>
      <Options/>
      <Routes>
        <Route path='/combination' exact element={<Combination/>}/>
        <Route path='/permutation' exact element={<Permutation/>}/>
        <Route path='/variation' exact element={<Variation/>}/>
      </Routes>
      <h1 className='text-center mt-5'>Dont know wich option to choose?</h1>
    </div>
  )
}
