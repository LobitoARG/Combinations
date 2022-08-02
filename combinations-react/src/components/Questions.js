import React from 'react'

export default function Questions(props) {
  return (
    <div className="question-block">
      <h2 className='question'> {props.question} </h2>
      <p className='answer'> {props.answer} </p>
    </div>
  );
}
