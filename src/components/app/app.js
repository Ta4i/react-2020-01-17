import React, {Component} from 'react'
import {Provider} from 'react-redux'
import Restaurants from '../restaurants'
import {Layout} from 'antd'
import Header from '../header'
import {store} from '../../store'
import Order from '../order'

class App extends Component {
  state = {
    isOrderDetailsVisible: false,
  }

  showOrder = () => {
    this.setState({
      isOrderDetailsVisible: true,
    })
  }

  hideOrder = () => {
    this.setState({
      isOrderDetailsVisible: false,
    })
  }

  render() {
    return (
      <Provider store={store}>
        <div>
          <Layout>
            <Header showOrder={this.showOrder} />
            <Layout.Content>
              <Restaurants />
            </Layout.Content>
          </Layout>
        </div>
        <Order
          isVisible={this.state.isOrderDetailsVisible}
          onClose={this.hideOrder}
        />
      </Provider>
    )
  }
}

export default App
