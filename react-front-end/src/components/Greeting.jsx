import React from 'react'
import './Greeting.scss';

export function Greeting(props) {
  

  return (
    <>
      <div className="greeting">
        <h4 className="day">Thursday, December 3rd</h4>
        <h2 className="personalized-greeting">Good Morning, Paige!</h2> 
      </div>
    </>
  )
}
