import Image from 'next/image'
import React, { useState } from 'react'

// import gif from '../../public/images/ticTacToe.gif'
export default function TicTacToe() {
  var [state,setState] = useState({toggled: false})

  const hoverOver = () => {setState({toggled :true})}
  const hoverOut = () => {setState({toggled :false})}

  const technologyUsed =() => {
    return (
      <div id="ticTacToeTechnologies">
        <div className="techHead">Technologies: </div>
        <span className="tech"> Vanilla Javascript, HTML,CSS</span>
      </div>
    )
  }
  const description = () => {

    return (
      <div id="ticTacToeTechnologies">
        <div className="techHead">Description:</div>
        <div className="description">
          Created a clone of connect tic-tac-toe with plain html, vanilla javascript, and css
        </div>
    </div>
    )
  }

  if (state.toggled) {
    return (
      <div id="ticTacToeProject"onMouseEnter={e => {hoverOver()}}onMouseLeave={e => {hoverOut()}}>
      <div id="ticTacToeTitle"> <a  href="https://github.com/Gkolman/mini-apps-1" style={{color:'white'}} >  Tic-tac-toe </a></div>
        <Image id="ticTacToeDisplay"src = "/images/tic-tac-toe.gif"
          alt="loading..."
          height="5vw"
          width="8vw"
          layout="responsive"
        />
        {description()}
      </div>
    )
  } else {
    return (
      <div id="ticTacToeProject"onMouseEnter={e => {hoverOver()}}onMouseLeave={e => {hoverOut()}}>
      <div id="ticTacToeTitle"> <a  href="https://github.com/Gkolman/mini-apps-1" style={{color:'white'}} >  Tic-tac-toe </a></div>
      <Image id="ticTacToeDisplay"src = "/images/tic-tac-toe.png"
        alt="loading..."
        height="5vw"
        width="8vw"
        layout="responsive"/>
      {technologyUsed()}
    </div>
    )
  }
}