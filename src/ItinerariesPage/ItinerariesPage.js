import React from 'react'
import './ItinerariesPage.css'

function ItinerariesPage() {
    return (
        <div id='ItinerariesPage'>
            <h2>Itineraries</h2>
            <p id='itineraries-paragraph'>We offer classic itineraries that cover both must-sees and additional excursions in China.</p>
            <div className='itineraries-container'>
                <div className='itinerary'>
                    <h3>Tibet</h3>
                    <div className='tibet itinerary-pic'></div>
                </div>
                <div className='itinerary'>
                    <h3>Yangtze River Cruise</h3>
                    <div className='yangtze itinerary-pic'></div>
                </div>
            </div>
        </div>
    )
}

export default ItinerariesPage