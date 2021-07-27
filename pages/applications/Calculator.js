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
        <div id="calculatorTitle"> <a  href="https://github.com/Gkolman/react-native-calculator" style={{color:'white'}} > Calculator </a></div>
        <Image id="calculatorDisplay"  alt="loading..."
        src= {state.toggled ?'/images/calculator.gif' : '/images/calculator.png'}
        alt="loading..."
        height="5vw"
        width="8vw"
        layout="responsive"/>
        <div id="calculatorTechnologies"
          >
          {state.toggled ? description() : technologyUsed()}
        </div>
      </div>
    )
  }