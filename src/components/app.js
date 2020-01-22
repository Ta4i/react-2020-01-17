import React, {PureComponent} from 'react'
import Restaurants from './restaurants'

class App extends PureComponent {
  render() {
    return (
      <React.Fragment>
        <Restaurants restaurants={this.props.restaurants} />
      </React.Fragment>
    )
  }
}

export default App
