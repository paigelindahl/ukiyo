import React from 'react'
import './styles/Greeting.scss';

export function Greeting(props) {
  

  return (
    <>
      <div className="greeting">
        <h5 className="day">Thursday, December 3rd</h5>
        <h4 id="greeting" className="personalized-greeting">GOOD MORNING, PAIGE!</h4> 
      </div>
    </>
  )
}
