import React from 'react'
import './NavBarBottom.css'
import { Link } from 'react-router-dom'

function NavBarBottom() {
    return (
        <>
            <ul id='NavBarBottom'>
                <li><Link to='/WhyUs'>Why Us</Link></li>
                <li><Link to='/itineraries'>Itineraries</Link></li>
                <li><Link to='/VisaServices'>Visa Services</Link></li>
            </ul>
        </>
    )
}

export default NavBarBottom