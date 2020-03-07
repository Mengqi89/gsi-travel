import React, { Component } from 'react'
import './ItinerariesPage.css'
import tibet_itinerary from '../assets/tibet.pdf'
import yangtze_itinerary from '../assets/yangtze.pdf'
import china_highlights_itinerary from '../assets/china-highlights.pdf'

class ItinerariesPage extends Component {

    state = {
        tibet_itinerary_pdf: false,
        yangtze_itinerary_pdf: false,
        highlights_itinerary_pdf: false
    }

    togglePdf(id) {
        this.setState({ [id]: !this.state[id] })
    }

    render() {
        return (
            <div id='ItinerariesPage'>
                <h2 id='ItinerariesPage-title'>Itineraries</h2>
                <p id='itineraries-paragraph'>We offer classic itineraries that cover both must-sees and additional excursions in China.</p>
                <div className='itineraries-container'>
                    <div className='itinerary'>
                        <button className='itinerary-title' onClick={() => this.togglePdf('tibet_itinerary_pdf')}>Tibet</button>
                        {this.state.tibet_itinerary_pdf === true ? <iframe title='Tibet Itinerary' src={tibet_itinerary} width='100%' height='500px' id='tibet_itinerary_pdf'></iframe> : <div></div>}
                        <div className='tibet itinerary-pic'></div>
                    </div>
                    <div className='itinerary'>
                        <button className='itinerary-title' onClick={() => this.togglePdf('yangtze_itinerary_pdf')}>Yangtze River Cruise</button>
                        {this.state.yangtze_itinerary_pdf === true ? <iframe title='Yangtze Itinerary' src={yangtze_itinerary} width='100%' height='500px' id='yangtze_itinerary_pdf'></iframe> : <div></div>}
                        <div className='yangtze itinerary-pic'></div>
                    </div>
                    <div className='itinerary'>
                        <button className='itinerary-title' onClick={() => this.togglePdf('highlights_itinerary_pdf')} >China Highlights Tour</button>
                        {this.state.highlights_itinerary_pdf === true ? <iframe title='China Highlights Itinerary' src={china_highlights_itinerary} width='100%' height='500px' id='highlights_itinerary_pdf'></iframe> : <div></div>}
                        <div className='china-highlights itinerary-pic'></div>
                    </div>
                </div>
            </div>
        )
    }
}

export default ItinerariesPage