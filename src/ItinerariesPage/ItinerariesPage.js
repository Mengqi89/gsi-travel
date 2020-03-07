import React from 'react'
import './ItinerariesPage.css'
import tibet_itinerary from '../assets/tibet.pdf'
import yangtze_itinerary from '../assets/yangtze.pdf'
import china_highlights_itinerary from '../assets/china-highlights.pdf'

function togglePdf(id) {
    let pdf = document.getElementById(id)
    if (pdf.style.display === 'none') {
        pdf.style.display = 'block'
    } else {
        pdf.style.display = 'none'
    }
}

function ItinerariesPage() {
    return (
        <div id='ItinerariesPage'>
            <h2 id='ItinerariesPage-title'>Itineraries</h2>
            <p id='itineraries-paragraph'>We offer classic itineraries that cover both must-sees and additional excursions in China.</p>
            <div className='itineraries-container'>
                <div className='itinerary'>
                    <button className='itinerary-title' onClick={() => togglePdf('tibet-itinerary-pdf')}>Tibet</button>
                    <iframe title='Tibet Itinerary' src={tibet_itinerary} width='100%' height='500px' id='tibet-itinerary-pdf'></iframe>
                    <div className='tibet itinerary-pic'></div>
                </div>
                <div className='itinerary'>
                    <div>
                        <button className='itinerary-title' onClick={() => togglePdf('yangtze-itinerary-pdf')}>Yangtze River Cruise</button>
                    </div>
                    <iframe title='Yangtze Itinerary' src={yangtze_itinerary} width='100%' height='500px' id='yangtze-itinerary-pdf'></iframe>
                    <div className='yangtze itinerary-pic'></div>
                </div>
                <div className='itinerary'>
                    <button className='itinerary-title' onClick={() => togglePdf('highlights-itinerary-pdf')} >China Highlights Tour</button>
                    <iframe title='China Highlights Itinerary' src={china_highlights_itinerary} width='100%' height='500px' id='highlights-itinerary-pdf'></iframe>
                    <div className='china-highlights itinerary-pic'></div>
                </div>
            </div>
        </div>
    )
}

export default ItinerariesPage