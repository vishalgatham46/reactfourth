import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Navigation extends Component {
    render() {
        return (
            <div className='navBar'>
                <Link to='/home' className="link" >HOME</Link>
                <Link to='/student' className="link" >STUDENT</Link>
                <Link to='/contact' className="link" >CONTACT US</Link>
            </div>
        )
    }
}

export default Navigation