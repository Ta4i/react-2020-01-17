import React from 'react'
import Restaurants from '../restaurants/restaurants'
import './app.css'

const App = ({restaurants}) => (
  <div className="App">
    <Restaurants restaurants={restaurants} />
  </div>
)

export default App
