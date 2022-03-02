import React, { Component } from 'react'
const data={
    color: 'blue',
}


export class Classcomp extends Component {
  render() {
    return (
        <>
        <div className='compcontainer classcont'> 
        <p className='title'>This is created with Class Component</p>
        <p className='external'>This is External CSS</p>
        <p style={data}>This is Inline CSS</p>
        </div>
        </>
    )
  }
}

export default Classcomp