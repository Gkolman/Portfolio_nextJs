import "../scss/styles.scss"
import Image from 'next/image'
import SideBar from './SideBar.js'
import MineSweeper from './applications/MineSweeper.js'
import Reviews from './applications/Reviews.js'
import CheckoutCalendar from './applications/CheckoutCalendar.js'
import TicTacToe from './applications/TicTacToe.js'
import ConnectFour from './applications/ConnectFour.js'
import Calculator from './applications/Calculator.js'


export default function Applications() {
  return (
    <div>
      <SideBar/>
      <div className='frame'>
        <Image
          id=""
          src='/images/background6.jpg'
          alt="loading..."
          layout = "fill"
        />
      </div>
      <div className="subBody">
        <CheckoutCalendar/>
        <Reviews/>
        <MineSweeper/>
        <TicTacToe/>
        <ConnectFour/>
        <Calculator/>
      </div>
    </div>
  )
}
