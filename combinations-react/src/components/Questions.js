import React from 'react'
import WhatIsCombinatory from './WhatIsCombinatoy';
import { useTranslation } from 'react-i18next'
import ImportantConcepts from './ImportantConcepts';
import WhatMethod from './WhatMethod';
import IsOrderImportant from './IsOrderImportant';

export default function Questions(props) {

  const { t } = useTranslation();
  
  return (
    <div className="question-block">
      <WhatIsCombinatory
                question = {t('questions.first')}
                example_explanation = {t('answers.example_explanation')}
                first_order = {t('answers.first_order')}
                second_order = {t('answers.second_order')}
                third_order = {t('answers.third_order')}
      ></WhatIsCombinatory>

      <ImportantConcepts
                question = {t('questions.second')}
      ></ImportantConcepts>

      <WhatMethod
                question = {t('questions.third')}
      ></WhatMethod>

      <IsOrderImportant
                question = {t('questions.forth')}
                step_one = {t('answers.step_one')}
                step_two = {t('answers.step_two')}
                order_example = {t('answers.order_example')}
      ></IsOrderImportant>
    </div>
  );
}
