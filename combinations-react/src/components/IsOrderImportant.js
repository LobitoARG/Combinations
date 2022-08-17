import React from 'react'
import { Trans, useTranslation } from 'react-i18next';

export default function IsOrderImportant(props) {

  const { t } = useTranslation();

  return (
    <>
        <div className="question-block">
            <h2 className='question'> {props.question} </h2>
            <p className='answer'>{props.step_one}</p>
            <p className='answer'>{props.step_two}</p>
            <p className='answer_explanation'>{props.order_example}</p>
        </div>
    </>
  );
}