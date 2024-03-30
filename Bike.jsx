import React from 'react'
import image10r from '../assets/Images/10r.jfif'
import '../assets/css/Table.css'
function Bike() {
  return (
    <>
       <div className='aa'>
            <img src={image10r} style={{height: '380px'}}/>
            <h2>NINJA ZX10R.</h2>
           <div className='bb'>
           <p className='pp'> 18,000,00/-</p>
            <button className='cc'>BUY NOW</button>
           </div>
        </div>
    </>
  )
}

export default Bike
