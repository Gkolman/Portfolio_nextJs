import Image from 'next/image'
import React, { useState } from 'react'

// import gif from '../../public/images/connectFour.gif'
export default function connectFour() {
  var [state,setState] = useState({toggled: false})

  const hoverOver = () => {setState({toggled :true})}
  const hoverOut = () => {setState({toggled :false})}
  const technologyUsed =() => {
    return (
      <div>
        <div className="techHead">Technologies: </div>
        <span className="tech">React,  Javascript,  Express,  CSS,  Webpack</span>
      </div>
    )
  }
  const description = () => {
    return (
      <div>
        <div className="techHead">Description:</div>
        <div className="description">
            Built a clone of the classic Connect Four game with React and hosted on an express server
        </div>
    </div>
    )
  }

  return (
      <div id="connectFourProject" onMouseEnter={e => {hoverOver()}}onMouseLeave={e => {hoverOut()}}>
        <a  href="https://github.com/Gkolman/mini-apps-1" >
        <div id="connectFourTitle"> <a  href="https://github.com/Gkolman/mini-apps-1" style={{color:'white'}} >  Connect-Four </a></div>
        <Image id="connectFourDisplay" alt="loading..."
          src={state.toggled ? "/static/images/connectFour.gif" : "/static/images/connectFour.png" }
          height="5vw"
          width="8vw"
          layout="responsive"
          />
        <div id="connectFourTechnologies">{state.toggled ? description() : technologyUsed()}</div>
        </a>
      </div>
    )
  }