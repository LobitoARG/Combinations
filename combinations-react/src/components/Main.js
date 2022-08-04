import React from 'react'
import '../index.css'
import Combination from './Combination'
import Permutation from './Permutation'
import Variation from './Variation'
import Options from './Options'
import {Routes, Route} from 'react-router-dom'

export default function Main() {
  return (
    <div className = 'main-div'>
      <div className='nav-div'>
        <h1 className='logo'>Combinados</h1>
        <div className='settings'>
          <button><i class="fa-solid fa-circle-half-stroke"></i></button>
          <button><i class="fa-solid fa-globe"></i></button>
        </div>
      </div>
      <div>
      </div>
      <div className='main-calc'>
      <Options/>
        <Routes>
          <Route path='/combination' exact element={<Combination/>}/>
          <Route path='/permutation' exact element={<Permutation/>}/>
          <Route path='/variation' exact element={<Variation/>}/>
        </Routes>
      </div>
      <a href="#question-title" className='dont-know'><h3 className='dont-know'>Don't know which option to choose?</h3></a>
    </div>
  )
}
