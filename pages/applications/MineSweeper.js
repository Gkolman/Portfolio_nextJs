import Image from 'next/image'
import React, { useState } from 'react'

// import gif from '../../public/images/mineSweeper.gif'
export default function MineSweeper() {
  var [state,setState] = useState({toggled: false})

  const hoverOver = () => {setState({toggled :true})}
  const hoverOut = () => {setState({toggled :false})}
  const technologyUsed =() => {
    return (
      <div>
        <div className="techHead">Technologies: </div>
        <span className="tech">React, Redux, Javascript, Webpack, CSS</span>
      </div>
    )
  }
  const description = () => {
    return (
      <div>
        <div className="techHead">Description:</div>
        <div className="description">
          Designed a clone of the nastalgic Minesweeper game in React with Redux for state management.
        </div>
    </div>
    )
  }
  return (
      <div id="mineSweeperProject"onMouseEnter={e => {hoverOver()}}onMouseLeave={e => {hoverOut()}}>
      <a href="https://github.com/Gkolman/mini-apps-2">
        <div id="mineSweeperTitle"> <a  href="https://github.com/Gkolman/mini-apps-2" style={{color:'white'}} >  MineSweeper </a></div>
        <Image src = {state.toggled ? "/static/images/mineSweeper.gif": "/static/images/mineSweeper.png" }
          alt="loading..."
          height="5vw"
          width="8vw"
          layout="responsive"
          />
        <div id="mineSweeperTechnologies">
        {state.toggled? description() : technologyUsed() }
        </div>
      </a>
    </div>
  )

}