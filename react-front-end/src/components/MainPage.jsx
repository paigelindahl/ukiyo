import React from 'react'
import { LogoProfile } from './LogoProfile';
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
