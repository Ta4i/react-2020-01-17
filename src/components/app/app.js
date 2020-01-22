import React, {PureComponent} from 'react'
import Restaurants from '../restaurants/restaurants'
import './app.css'

class App extends PureComponent {
  render() {
    return (
      <div>
        <Restaurants restaurants={this.props.restaurants} />
      </div>
    )
  }
}

export default App
