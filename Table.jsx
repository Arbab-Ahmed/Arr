import React from 'react'
import image4 from '../assets/Images/R1.jfif'
import '../assets/css/Table.css'
function Table() {
  return (
    <>
      <div className='aa'>
            <img src={image4} style={{height:'380px'}}/>
            <h2>YAMAHA R1m.</h2>
           <div className='bb'>
           <p className='pp'> 30,000,00/-</p>
            <button className='cc'>BUY NOW</button>
           </div>
        </div>
    </>
  )
}

export default Table
