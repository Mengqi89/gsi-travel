import React from 'react'
import './ContactBar.css'
import { Link } from 'react-router-dom'


function ContactBar() {

    return (
        <div id='ContactBar'>
            <h1>
                <Link to='/'><button>Great Sea Travel</button></Link>
            </h1>
            <div className='contact-container'>
                <div className='contact'>
                    <div>
                        <span className='fas fa-envelope-square'></span> <span>gsitravelchina@gmail.com</span>
                    </div>
                    <div>
                        <span className='fas fa-tty'></span> <span>801-995-2730</span>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default ContactBar