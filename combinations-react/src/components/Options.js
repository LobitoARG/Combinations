import React from 'react'
import { NavLink } from 'react-router-dom'
import { useTranslation } from 'react-i18next';


export default function Options() {

  const { t } = useTranslation();

  return (
    <>
    <div className="options">
        <NavLink to='/combination' exact><button id="button-comb">{t('options.one')}</button></NavLink>
        <NavLink to='/permutation' exact><button>{t('options.two')}</button></NavLink>
        <NavLink to='variation' exact><button>{t('options.three')}</button></NavLink>
    </div>
    </>
  )
}
