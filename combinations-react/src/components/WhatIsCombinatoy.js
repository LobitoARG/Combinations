import React from 'react'
import Apples from './Apples';
import ApplesList from './ApplesList';

export default function WhatIsCombinatory(props) {
  return (
    <div>
        <div className="question-block">
            <h2 className='question'> {props.question} </h2>
            <p className='answer'> {props.answer} </p>
            <p className='answer'> {props.example_explanation} </p>
            <p className='answer'> {props.first_order} </p>

            <Apples
                    color1 = "firstApple"
                    color2 = "secondApple"
                    color3 = "thirdApple"
            ></Apples>

            <p className='answer'> {props.second_order} </p>

            <Apples
                    color1 = "thirdApple"
                    color2 = "secondApple"
                    color3 = "firstApple"
            ></Apples>

            <p className='answer'> {props.third_order} </p>

            <div className='main-apples-div'>
            <ApplesList
                color1 = "firstApple"
                color2 = "secondApple"
                color3 = "thirdApple"
            ></ApplesList>
            </div>

            <p className='answer'> {props.sum_up} </p>

        </div>
    </div>
  );
}
