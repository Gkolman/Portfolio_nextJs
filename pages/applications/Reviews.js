import Image from 'next/image'
import React, { useState } from 'react'

// import gif from '../../public/images/reviews.gif'
export default function Reviews() {
  var [state,setState] = useState({toggled: false})

  const hoverOver = () => {setState({toggled :true})}
  const hoverOut = () => {setState({toggled :false})}
  const technologyUsed = () => {
    return (
      <div >
        <div className="techHead">Technologies:</div>
        <div id="reviewsTechList">
          <div>
            <span className="techDesc">Front-end:</span><span className="tech">React-hooks, CSS</span>
          </div>
          <div>
            <span className="techDesc">Back-end:</span><span className="tech">MongoDb, Mongoose, Express</span>
          </div>
          <div>
            <span className="techDesc">Testing:</span><span className="tech">Jest, Enzyme, SuperTest, Mocha/Chai</span>
          </div>
          <div>
            <span className="techDesc">Dev-tools:</span><span className="tech">Webpack, Docker, Babel, Javascript</span>
          </div>
        </div>
      </div>
    )
  }
  const description = () => {

    return (
      <div >
      <div className="techHead">Description:</div>
      <div>
        <div className="description">
        Designed reviews micro-service for a service oriented full stack application. Reviews are paginated dynamically using React and are filterable based on user preference. Data is stored in mongoDb and is pulled through an API built using Express that targets specific product data via url query parameters. Code Is transpiled via Webpack and Babel then bundled and can be requested via a url. End to end testing has been achieved through using mocha/chai, Jest, and enzyme for the front end and SuperTest  for the back-end API. Containerized with Docker for easy deployment and distributed testing.
        </div>
      </div>
    </div>
    )

  }

  return (
    <div id="reviewsProject"onMouseEnter={e => {hoverOver()}} onMouseLeave={e => {hoverOut()}}>
      <a  href="https://github.com/Gkolman/Reviews-component">
        <div id="reviewsTitle"> <a  href="https://github.com/Gkolman/Reviews-component" style={{color:'white'}} > Reviews: micro-service </a></div>
          <Image id="reviewsDisplay"
          src =   {state.toggled ? "/static/images/FecGif.gif": "/static/images/Fec.png"}
          alt="loading..."
          height="5vw"
          width="8vw"
          layout="responsive"/>
        <div id="reviewsTechnologies">
            {state.toggled ? description(): technologyUsed()}
        </div>
      </a>
  </div>
  )

}