import React from 'react'
import { NavLink } from 'react-router-dom'
import { useTranslation } from 'react-i18next';
import { useState } from 'react';


export default function Options() {
 
  const { t } = useTranslation();

  const [active, setActive] = useState(false);
  const [active2, setActive2] = useState(false);
  const [active3, setActive3] = useState(false);

  const handleComb = () => {
    setActive(true);
    setActive2(false);
    setActive3(false);
  };

  const handlePerm = () => {
    setActive(false);
    setActive2(true);
    setActive3(false);
  };

  const handleVar = () => {
    setActive(false);
    setActive2(false);
    setActive3(true);
  };


  return (
    <>
    <div className="options">
      <div>
        <NavLink to='/combination' exact><button id={active.toString()} onClick={handleComb}>{t('options.one')}</button></NavLink>
      </div>

      <div>
        <NavLink to='/permutation' exact><button id={active2.toString()} onClick={handlePerm}>{t('options.two')}</button></NavLink>
      </div>

      <div>
        <NavLink to='variation' exact><button id={active3.toString()} onClick={handleVar}>{t('options.three')}</button></NavLink>
      </div>
        
    </div>
    </>
  )
}
