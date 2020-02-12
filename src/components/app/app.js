import React, {Component} from 'react'
import Restaurants from '../restaurants'
import {Layout} from 'antd'
import Header from '../header'
import './app.css'
import {store} from '../../store'
import {Provider} from 'react-redux'
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import CounterPage from '../routes/counter'
import RestaurantsPage from '../routes/restaurants'
import OrderPage from '../routes/order'
import OrderCompletePage from '../routes/order-complete'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Provider store={store}>
          <div>
            <Layout>
              <Header />
              <Layout.Content>
                <Switch>
                  <Route
                    path={'/counter/:initialValue'}
                    component={CounterPage}
                  />
                  <Route
                    path={'/restaurant/:currentId'}
                    exact
                    render={props => <RestaurantsPage />}
                  />
                  <Route
                    path={'/order'}
                    exact
                    render={props => <OrderPage />}
                  />
                  <Route
                    path={'/order/order-complete'}
                    exact
                    render={props => <OrderCompletePage />}
                  />
                  <Route path={'/'} render={() => <h1>Page Not Found</h1>} />
                </Switch>
              </Layout.Content>
            </Layout>
          </div>
        </Provider>
      </BrowserRouter>
    )
  }
}

export default App
