import React from 'react'
import Blog1 from '../component/Blog1'
import Blog2 from './Blog2'
import Blog3 from './Blog3'
function Blogmain() {
  return (
    <>
    <div style={{display: 'flex'}}>    
      <Blog1 />
      <Blog2 />
      <Blog3 />
    </div>
    </>
  )
}

export default Blogmain
