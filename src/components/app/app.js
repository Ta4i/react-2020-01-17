import React, {Component} from 'react'
import {Provider} from 'react-redux'
import Restaurants from '../restaurants'
import {Layout} from 'antd'
import Header from '../header'
import {store} from '../../store'
import Counter from '../counter'
import PropTypes from 'prop-types'

class App extends Component {
  static propTypes = {
    restaurants: PropTypes.array.isRequired,
  }

  render() {
    return (
      <Provider store={store}>
        <div>
          <Layout>
            <Header />
            <Counter />
            <Layout.Content>
              <Restaurants />
            </Layout.Content>
          </Layout>
        </div>
      </Provider>
    )
  }
}

App.defaultProps = {
  restaurants: [],
}

export default App
