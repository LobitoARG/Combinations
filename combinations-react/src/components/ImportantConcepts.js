import React from 'react'

export default function ImportantConcepts(props) {
  return (
    <>
        <div className="question-block">
            <h2 className='question'> {props.question} </h2>
            <p className='answer'> {props.n_number} </p>
            <p className='answer'> {props.r_number} </p>
            <p className='answer'> {props.second_example} </p>
        </div>
    </>
  );
}
