import React from 'react'
import image7 from'../assets/Images/sun.jfif'
function Blog2() {
  return (
    <>
       <div className='main_blog'>
        <img src={image7} className='imag_div' style={{height: '253px'}}/>
        <h2 className='hee'>Anything embarrassing <br />hidden in the middle</h2>
        <p className='par'>alteration in some form, by injected <br />humour, or randomised words which <br />don't look even slightly believable.</p>
        <button className='bttn_B'> Read Me </button>
        </div>
    </>
  )
}

export default Blog2
