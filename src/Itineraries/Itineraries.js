import React from 'react'
import './Itineraries.css'
import { Link } from 'react-router-dom'

function Itineraries() {
    return (
        <div id='itineraries'>
            <div className='itineraries-container'>
                <p>We offer classic itineraries that cover both must-sees and additional excursions in China, depending on your interest.</p>
            </div>
            <h2><Link to='/itineraries'>View Itineraries</Link></h2>
        </div>
    )
}

export default Itineraries