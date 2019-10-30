import React from 'react'
import ContactBar from './ContactBar/ContactBar'
import Itineraries from './Itineraries/Itineraries'
import WhyUs from './WhyUs/WhyUs'
import Testimonials from './Testimonials/Testimonials'
import NavBarBottom from './NavBarBottom/NavBarBottom'
import Hero from './Hero/Hero'

function App() {
  return (
    <div className='App'>
      <section className='App__navbar'>
        <ContactBar />
        <NavBarBottom />
      </section>
      <section className='hero-container'>
        <Hero />
      </section>
      <main className='App__main'>
        <Itineraries />
        <WhyUs />
        <Testimonials />
      </main>
    </div>
  )
}

export default App
