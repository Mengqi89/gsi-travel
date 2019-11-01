import React from 'react'
import './ContactBar.css'

function ContactBar() {
    let prevScrollpos = window.pageYOffset;
    window.onscroll = function () {
        let currentScrollPos = window.pageYOffset;
        if (prevScrollpos > currentScrollPos) {
            document.getElementById("ContactBar").style.top = "0";
        } else {
            document.getElementById("ContactBar").style.top = "-60px";
        }
        prevScrollpos = currentScrollPos;
    }

    function scrollUp(ev) {
        ev.preventDefault()
        document.body.scrollTop = 0
        document.documentElement.scrollTop = 0
    }

    return (
        <div id='ContactBar'>
            <h1>
                <button onClick={ev => scrollUp(ev)}>Great Sea Travel</button>
            </h1>
            <div className='contact-container'>
                <ul className='contact'>
                    <div>
                        <span className='fas fa-envelope-square'></span> <span>gsitravelchina@gmail.com</span>
                    </div>
                    <div>
                        <span className='fas fa-tty'></span> <span>801-995-2730</span>
                    </div>
                </ul>
            </div>
        </div >
    )
}

export default ContactBar