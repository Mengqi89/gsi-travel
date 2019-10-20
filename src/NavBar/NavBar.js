import React from 'react'
import './NavBar.css'

function NavBar() {
    return (
        <>
            <ul className='contact'>
                <li>Email: gsitravelchina@gmail.com</li>
                <li>Phone: 801-995-2730</li>
            </ul>
            <ul className='nav-links'>
                <li><a href='#itineraries'>Itineraries</a></li>
                <li><a href='#WhyUs'>Why Us</a></li>
                <li><a href='#testimonials'>Testimonials</a></li>
            </ul>
        </>
    )
}

export default NavBar