import React from 'react'
import NavBar from './NavBar/NavBar'
import Itineraries from './Itineraries/Itineraries'

function App() {
  return (
    <div className="App">
      <header className="App__header">
        <h1>Great Sea Travel</h1>
        <NavBar />
      </header>
      <main className="App__main">
        <Itineraries />
      </main>
    </div>
  )
}

export default App
