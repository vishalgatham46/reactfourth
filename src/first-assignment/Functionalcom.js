import React from 'react'
import './style.css';
const data={
    color: 'blue',
}


function Functionalcom() {
  return (
    <>
    <div className='compcontainer funccont'>
    <p className='title'>This is created with Functional Component</p>
    <p className='external'>This is External CSS</p>
    <p style={data}>This is Inline CSS</p>
    </div>
    </>

    
  )
}

export default Functionalcom