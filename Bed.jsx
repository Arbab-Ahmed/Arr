import React from 'react'
import '../assets/css/Bed.css'
import image2 from '../assets/Images/Hayabusa.jpg'
function Bed() {
  return (
    <>
      
      <div className='aa'>
            <img src={image2} style={{height:'380px'}}/>
            <h2>SUZUKI HAYABUSA</h2>
           <div className='bb'>
           <p className='pp'>$ 18,000,00/-</p>
            <button className='cc'>BUY NOW</button>
           </div>
    </div>
    </>
  )
}

export default Bed
