import React from 'react'
import './ItinerariesPage.css'

function ItinerariesPage() {
    return (
        <div id='ItinerariesPage'>
            <h2 id='ItinerariesPage-title'>Itineraries</h2>
            <p id='itineraries-paragraph'>We offer classic itineraries that cover both must-sees and additional excursions in China.</p>
            <div className='itineraries-container'>
                <div className='itinerary'>
                    <button className='itinerary-title'><a href='https://github.com/Mengqi89/gsi-travel/raw/master/src/assets/tibet.pdf'>Tibet</a></button>
                    <div className='tibet itinerary-pic'></div>
                </div>
                <div className='itinerary'>
                    <button className='itinerary-title'><a href='https://github.com/Mengqi89/gsi-travel/raw/master/src/assets/yangtze.pdf'>Yangtze River Cruise</a></button>
                    <div className='yangtze itinerary-pic'></div>
                </div>
                <div className='itinerary'>
                    <button className='itinerary-title'><a href='https://github.com/Mengqi89/gsi-travel/raw/master/src/assets/spring-break.pdf'>Spring Break Tour</a></button>
                    <div className='spring-break itinerary-pic'></div>
                </div>
            </div>
        </div>
    )
}

export default ItinerariesPage