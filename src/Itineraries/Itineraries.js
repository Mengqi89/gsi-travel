import React from 'react'
import './Itineraries.css'
import Tibet from '../assets/tibet3.jpg'

function Itineraries() {
    return (
        <div id='itineraries'>
            <h2>Itineraries</h2>
            <div className='itineraries-container'>
                <div className='itinerary'>
                    <img src={Tibet} alt='Tibet' className='itinerary-image-1' />
                    <h3>Tibet</h3>
                    <p>lorem ipsum ipsumipsumipsumipsumipsumipsum</p>
                </div>
                <div className='itinerary'>
                    <div className='itinerary-image-2'></div>
                    <h3>Yangtze River Cruise</h3>
                    <p>lorem ipsum ipsumipsumipsumipsumipsumipsum</p>
                </div>
                <div className='itinerary'>
                    <div className='itinerary-image-3'></div>
                    <h3>Guilin</h3>
                    <p>lorem ipsum ipsumipsumipsumipsumipsumipsum</p>

                </div>
                <div className='itinerary'>
                    <div className='itinerary-image-4'></div>
                    <h3>Beijing</h3>
                    <p>lorem ipsum ipsumipsumipsumipsumipsumipsum</p>
                </div>
            </div>
        </div>
    )
}

export default Itineraries