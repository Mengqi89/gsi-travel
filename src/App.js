import React from 'react'
import NavBar from './NavBar/NavBar'
import Itineraries from './Itineraries/Itineraries'
import WhyUs from './WhyUs/WhyUs'
import Testimonials from './Testimonials/Testimonials'

function App() {
  return (
    <div className='App'>
      <header className='App__header'>
        <h1>Great Sea Travel</h1>
        <NavBar />
      </header>
      <main className='App__main'>
        <Itineraries />
        <WhyUs />
        <Testimonials />
      </main>
    </div>
  )
}

export default App
