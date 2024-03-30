import React from 'react'
import Chair from './Chair';
import Table from './Table';
import Bed from './Bed';
import Fish from './Fish';
import Wood from './Wood';
import Bike from './Bike';
function Furniture() {
  return (
    <>
      <div >
      <div style={{display: 'flex'}}>
      <Chair />
        <Table />
        <Bed />
      </div>
        <div style={{display: 'flex'}}>
        <Fish />
        <Wood />
        <Bike />
        </div>
      </div>
    </>
  )
}

export default Furniture;
