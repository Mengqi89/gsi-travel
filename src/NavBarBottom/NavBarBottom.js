import React from 'react'
import './NavBarBottom.css'

function NavBarBottom() {
    // let prevScrollpos = window.pageYOffset;
    // window.onscroll = function () {
    //     let currentScrollPos = window.pageYOffset;
    //     if (prevScrollpos > currentScrollPos) {
    //         document.getElementById("NavBarBottom").style.top = "-60px";
    //     } else {
    //         document.getElementById("NavBarBottom").style.top = "0px";
    //     }
    //     prevScrollpos = currentScrollPos;
    // }
    return (
        <>
            <ul id='NavBarBottom'>
                <li><a href='#itineraries'>Itineraries</a></li>
                <li><a href='#WhyUs'>Why Us</a></li>
                <li><a href='#testimonials'>Testimonials</a></li>
            </ul>
        </>
    )
}

export default NavBarBottom