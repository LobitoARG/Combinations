import React from 'react'
import '../index.css'
import Combination from './Combination'
import Permutation from './Permutation'
import Variation from './Variation'
import Options from './Options'
import {Routes, Route} from 'react-router-dom'
import { useTranslation } from 'react-i18next';


export default function Main() {

  const { t } = useTranslation();


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
      <a href="#question-title" className='dont-know'><h3 className='dont-know'>{t('options.choose')}</h3></a>

    </div>
  )
}
