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
          Designed a mineSweeper game clone in React with Redux for state management.
        </div>
    </div>
    )
  }
  if (state.toggled) {
    return (
      <div id="mineSweeperProject"onMouseEnter={e => {hoverOver()}}onMouseLeave={e => {hoverOut()}}>
      <div id="mineSweeperTitle"> <a  href="https://github.com/Gkolman/mini-apps-2" style={{color:'white'}} >  MineSweeper </a></div>
      <Image src = "/images/mineSweeper.gif" alt="loading..."height="260"width="400"/>
      {description()}

    </div>
    )
  } else {
    return (
      <div id="mineSweeperProject"onMouseEnter={e => {hoverOver()}}onMouseLeave={e => {hoverOut()}}>
      <div id="mineSweeperTitle"> <a  href="https://github.com/Gkolman/mini-apps-2" style={{color:'white'}} >  MineSweeper </a></div>
      <Image src = "/images/mineSweeper.png" alt="loading..."height="230"width="376"/>
      {technologyUsed()}
    </div>
    )
  }
}