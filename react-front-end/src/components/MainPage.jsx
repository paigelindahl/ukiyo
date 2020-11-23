import React from 'react'
import { Greeting }  from './Greeting';
import { Quote } from './Quote';
import { CustomSlider } from './CustomSlider';

export function MainPage(props) {
  

  return (
    <>
      <Greeting/>
      <Quote/>
      <CustomSlider/>
    </>
  )
}
