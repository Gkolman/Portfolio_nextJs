import Image from 'next/image'
import React, { useState } from 'react'
export default function Calculator() {
  var [state,setState] = useState({toggled: false})

  const hoverOver = () => {setState({toggled: true})}
  const hoverOut = () => {setState({toggled: false})}

  const technologyUsed =() => {
    return (
      <div>
        <div className="techHead">Technologies: </div>
        <span className="tech">React-Native, Javascript, Android Studio, Expo</span>
      </div>
    )
  }
  const description = () => {
    return (
      <div>
        <div className="techHead">Description:</div>
        <div className="description">
          Created a calculator with React-Native and tested using Expo CLI and Android Studio for fun!
        </div>
    </div>
    )
  }

    return (
      <div id="calculatorProject"onMouseEnter={e => {hoverOver()}}onMouseLeave={e => {hoverOut()}}>
        <div id="calculatorTitle" > calculator </div>
        <Image id="calculatorDisplay"  alt="loading..."
        src= {state.toggled ?'/images/calculator.gif' : '/images/calculator.png'}
        height= {state.toggled ? "245px": "230px"}
        width={state.toggled ? "425px": "400px"}/>
        <div id="calculatorTechnologies"
          style={{
            width: state.toggled ? 425: 400
          }}
          >
          {state.toggled ? description() : technologyUsed()}
        </div>
      </div>
    )
  }