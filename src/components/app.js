import React, {PureComponent} from 'react'
import Restaurants from './restaurants'

class App extends PureComponent {
  render() {
    const {restaurants} = this.props
    return (
      <React.Fragment>
        <Restaurants restaurants={restaurants} />
      </React.Fragment>
    )
  }
}

export default App
