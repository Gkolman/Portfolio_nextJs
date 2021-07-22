import Image from 'next/image'
import React, { useState } from 'react'

// import gif from '../../public/images/checkoutCalendar.gif'
export default function CheckoutCalendar() {
  var [state,setState] = useState({toggled: false})

  const hoverOver = () => {
    console.log('entering hover over')
    setState({toggled :true})
  }
  const hoverOut = () => {
    console.log('entering hover out')
    setState({toggled :false})
  }

  const technologyUsed = () => {
    return (
    <div>
      <div className="techHead">Technologies:</div>
      <div id="checkoutCalendarTechList">
        <div><span className="techDesc">Front-end:</span><span className="tech">React-hooks</span></div>
        <div><span className="techDesc">Back-end:</span><span className="tech">Postgres, Sequelize, Nginx, Express</span></div>
        <div><span className="techDesc">Testing:</span><span className="tech">K6, Artillery, New Relic, Lighthouse</span></div>
        <div><span className="techDesc">Dev-tools:</span><span className="tech">Webpack, Ubuntu, Aws CLI, Javascript</span></div>
      </div>
    </div>
    )}
  const description = () => {

    return (
      <div>
        <div className="techHead">Description:</div>
        <div>
          <div className="description">
            Enhanced throughput of service oriented component that contained 80 million+ records by 295% from 342 rps to 1009 rps through horizontal scaling. Incorporated k6 load testing software in tandem with newRelic to identify “bottleneck” points in infrastructure. Configured stress testing simulations to generate quantifiable performance data to be measured and documented. Designed proxy server using nginx to delegate network requests across multiple servers to reduce server loads. Diagrammed component architecture using lucidchart.com and documented all findings/improvements
          </div>
        </div>
      </div>
    )
  }
    return(
    <div id="checkoutCalendarProject"onMouseEnter={e => {hoverOver()}} onMouseLeave={e => {hoverOut()}}>
      <div id="checkoutCalendarTitle"> <a  href="https://github.com/Gkolman/checkout-calendar" style={{color:'white'}} >  Checkout/Pricing: micro-service </a></div>
      <Image id="checkoutCalendarDisplay" alt="loading..."
        src ={state.toggled ? '/images/sdc.gif' : '/images/sdc.png'}
        height={state.toggled ? 230 : 215}
        width= {state.toggled ? 400 : 376}
      />
      <div id="checkoutCalendarTechnologies">{state.toggled ? description() : technologyUsed()}</div>
    </div>
    )
}
