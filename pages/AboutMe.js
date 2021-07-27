import SideBar from './SideBar.js'
import "../scss/styles.scss"
import Image from 'next/image'
import React, { useState } from 'react'


export default function AboutMe() {
  var [state,setState] = useState({toggled: false})

  const hoverOver = () => {setState({toggled: true})}
  const hoverOut = () => {setState({toggled: false})}

  return (
  <div>
    <SideBar/>
    <div className='frame'>
      <Image src='/images/background.jpg' alt="loading backrgound..."layout = "fill"/>
    </div>
    <div className="subBody">
      <div className="aboutMeHeader">
        <div className="headerBackDrop">
          <div className="nameHeader" > Gage Guzman </div>
          <div className="selfie">
            <Image src='/images/selfie.png' width='1vw' height='1vw' alt="loading..." layout="responsive"/>
          </div>

          <a  id="github" href="https://github.com/Gkolman">Github</a>
          <a  id="resume" href="https://docs.google.com/document/d/1VVOoirQa8fRODGERVnZH_fB1Ek99cgIJaiHRlYj4hn0/edit?usp=sharing">Resume</a>
          <div id="aboutMeTitle" onMouseEnter={e => {hoverOver()}} onMouseLeave={e => {hoverOut()}}> About me </div>
          <a  id="linkedIn" href="https://www.linkedin.com/in/gage-guzman-8922221b3/">LinkedIn</a>
        </div>
      </div>
          <div id="aboutMe"  style={{borderColor: state.toggled? 'yellow': 'white'}} >
                Software Engineer in the Bay Area passionate
                about code and innovative technology with experience
                creating production ready full stack applications in javascript.
                Fast learner that's familiar with pair programming,
                Agile workflow and test-driven development.
                Looking for my next team to be apart of and collaborate with to create
                something neat that we can all be proud of!
          </div>
    </div>
  </div>
  )
}


