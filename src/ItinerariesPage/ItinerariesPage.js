import React from 'react'
import './ItinerariesPage.css'

function ItinerariesPage() {
    return (
        <div id='ItinerariesPage'>
            <h2 id='ItinerariesPage-title'>Itineraries</h2>
            <p id='itineraries-paragraph'>We offer classic itineraries that cover both must-sees and additional excursions in China.</p>
            <div className='itineraries-container'>
                <div className='itinerary'>
                    <div>
                        <a href='https://github.com/Mengqi89/gsi-travel/raw/master/src/assets/tibet.pdf'><button className='itinerary-title'>Tibet</button></a>
                    </div>
                    <div className='tibet itinerary-pic'></div>
                </div>
                <div className='itinerary'>
                    <div>
                        <a href='https://github.com/Mengqi89/gsi-travel/raw/master/src/assets/yangtze.pdf'><button className='itinerary-title'>Yangtze River Cruise</button></a>
                    </div>
                    <div className='yangtze itinerary-pic'></div>
                </div>
                <div className='itinerary'>
                    <div>
                        <a href='https://github.com/Mengqi89/gsi-travel/raw/master/src/assets/spring-break.pdf'><button className='itinerary-title'>China Highlights Tour</button></a>
                    </div>
                    <div className='china-highlights itinerary-pic'></div>
                </div>
            </div>
        </div>
    )
}

export default ItinerariesPage