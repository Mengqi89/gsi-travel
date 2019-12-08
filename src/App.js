import React from 'react'
import { Route, Switch } from 'react-router-dom'
import LandingPage from './LandingPage/LandingPage'
import ContactBar from './ContactBar/ContactBar'
import NavBarBottom from './NavBarBottom/NavBarBottom'
import ItinerariesPage from './ItinerariesPage/ItinerariesPage'
import WhyUs from './WhyUs/WhyUs'
import VisaServices from './VisaServices/VisaServices'

function App() {
  return (
    <div className='App'>
      <section className='App__navbar'>
        <ContactBar />
        <NavBarBottom />
      </section>
      <Switch>
        <Route exact path='/' component={LandingPage}></Route>
        <Route path={'/itineraries'} component={ItinerariesPage}></Route>
        <Route path={'/WhyUs'} component={WhyUs}></Route>
        <Route path={'/VisaServices'} component={VisaServices}></Route>
      </Switch>
    </div>
  )
}

export default App
