import React from 'react'
import WhatIsCombinatory from './WhatIsCombinatoy';
import { useTranslation } from 'react-i18next'
import ImportantConcepts from './ImportantConcepts';

export default function Questions(props) {

  const { t } = useTranslation();
  
  return (
    <div className="question-block">
      <WhatIsCombinatory
                question = {t('questions.first')}
                answer = {t('answers.first')}
                example_explanation = {t('answers.example_explanation')}
                first_order = {t('answers.first_order')}
                second_order = {t('answers.second_order')}
                third_order = {t('answers.third_order')}
                sum_up = {t('answers.sum_up')}
      ></WhatIsCombinatory>

      <ImportantConcepts
                question = {t('questions.second')}
                n_number = {t('answers.n_number')}
                r_number = {t('answers.r_number')}
                second_example = {t('answers.second_example')}
      ></ImportantConcepts>


    </div>
  );
}
