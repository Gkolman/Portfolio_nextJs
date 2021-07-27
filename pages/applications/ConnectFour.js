import Image from 'next/image'
import React, { useState } from 'react'

// import gif from '../../public/images/connectFour.gif'
export default function connectFour() {
  var [state,setState] = useState({toggled: false})

  const hoverOver = () => {
    console.log('entering hover over')
    setState({toggled :true})
  }
  const hoverOut = () => {
    console.log('entering hover out')
    setState({toggled :false})
  }
  const technologyUsed =() => {
    return (
      <div id="connectFourTechnologies">
        <div className="techHead">Technologies: </div>
        <span className="tech">React, Javascript, CSS, Webpack</span>
      </div>
    )
  }
  const description = () => {
    return (
      <div id="connectFourTechnologies">
        <div className="techHead">Description:</div>
        <div className="description">
            Built a clone of the classic Connect Four game with React and transpiled JSX through Babel via Webpack
        </div>
    </div>
    )
  }
  if (state.toggled) {
    return (
      <div id="connectFourProject"onMouseEnter={e => {hoverOver()}}onMouseLeave={e => {hoverOut()}}>
        <div id="connectFourTitle"> <a  href="https://github.com/Gkolman/mini-apps-1" style={{color:'white'}} >  Connect-Four </a></div>
        <Image id="connectFourDisplay"src = "/images/connectFour.gif"
            alt="loading..."
            height="5vw"
            width="8vw"
            layout="responsive"/>
        {description()}
      </div>
    )
  } else {
    return (
      <div id="connectFourProject"onMouseEnter={e => {hoverOver()}}onMouseLeave={e => {hoverOut()}}>
        <div id="connectFourTitle"> <a  href="https://github.com/Gkolman/mini-apps-1" style={{color:'white'}} >  Connect-Four </a></div>
        <Image id="connectFourDisplay"src = "/images/connectFour.png"
          alt="loading..."
          height="5vw"
          width="8vw"
          layout="responsive"/>
        {technologyUsed()}
    </div>
    )
  }

  }