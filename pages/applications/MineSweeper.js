import Image from 'next/image'
import React, { useState } from 'react'

// import gif from '../../public/images/mineSweeper.gif'
export default function MineSweeper() {
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
      <div id="mineSweeperTechnologies">
        <div className="techHead">Technologies: </div>
        <span className="tech">React, Redux, Javascript, Webpack, CSS</span>
      </div>
    )
  }
  const description = () => {

    return (
      <div id="mineSweeperTechnologies">
        <div className="techHead">Description:</div>
        <div className="description">
          Designed a clone of the nastalgic Minesweeper game in React with Redux for state management.
        </div>
    </div>
    )
  }
  if (state.toggled) {
    return (
      <div id="mineSweeperProject"onMouseEnter={e => {hoverOver()}}onMouseLeave={e => {hoverOut()}}>
      <div id="mineSweeperTitle"> <a  href="https://github.com/Gkolman/mini-apps-2" style={{color:'white'}} >  MineSweeper </a></div>
      <Image src = "/static/images/mineSweeper.gif"
        alt="loading..."
        height="5vw"
        width="8vw"
        layout="responsive"/>
          {description()}

    </div>
    )
  } else {
    return (
      <div id="mineSweeperProject"onMouseEnter={e => {hoverOver()}}onMouseLeave={e => {hoverOut()}}>
      <div id="mineSweeperTitle"> <a  href="https://github.com/Gkolman/mini-apps-2" style={{color:'white'}} >  MineSweeper </a></div>
      <Image src = "/static/images/mineSweeper.png"
        alt="loading..."
        height="5vw"
        width="8vw"
        layout="responsive"/>
      {technologyUsed()}
    </div>
    )
  }
}