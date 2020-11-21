import React from 'react'
import { LogoProfile } from './LogoProfile';
import { Greeting }  from './Greeting';
import { Quote } from './Quote';

export function MainPage(props) {
  

  return (
    <>
      <LogoProfile/>
      <Greeting/>
      <Quote/>
    </>
  )
}
