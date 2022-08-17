import React from 'react'
import { Trans, useTranslation } from 'react-i18next';

export default function IsRepetitionImportant(props) {

  const { t } = useTranslation();

  return (
    <>
        <div className="question-block">
            <h2 className='question'> {props.question} </h2>
            <Trans i18nKey="order">
              <p className='answer'> {t('answers.order')} </p>
            </Trans>

        </div>
    </>
  );
}
