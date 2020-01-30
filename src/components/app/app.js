import React, {Component} from 'react'
import {Provider} from 'react-redux'
import Restaurants from '../restaurants'
import {Layout} from 'antd'
import Header from '../header'
import {store} from '../../store'
import Order from '../order/order'

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <>
          <Layout>
            <Header />
            <Layout.Content>
              <Restaurants />
            </Layout.Content>
          </Layout>
          <Order />
        </>
      </Provider>
    )
  }
}

export default App
