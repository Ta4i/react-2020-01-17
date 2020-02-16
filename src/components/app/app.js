import React, {Component} from 'react'
import {Layout} from 'antd'
import Header from '../header'
import './app.css'
import {store} from '../../store'
import {Provider} from 'react-redux'
import {Route, Switch, Redirect} from 'react-router-dom'
import RestaurantPage from '../../routes/restaurant-page'
import CounterPage from '../../routes/counter-page'
import OrderPage from '../../routes/order-page'
import OrderComplete from '../../routes/order-complete'
import {ConnectedRouter} from 'connected-react-router'
import {history} from '../../history'
import {Provider as UserProvider} from '../../contexts/user'
import {LanguageProvider} from '../../contexts/language'
import LANGUAGE_CODES from '../../translations'

class App extends Component {
  state = {
    user: {name: ''},
    language: {locale: LANGUAGE_CODES.ENGLISH},
  }

  handleUserChange = user => {
    this.setState({
      user,
    })
  }

  handleLanguageChange = language => {
    this.setState({
      language,
    })
  }

  render() {
    return (
      <LanguageProvider
        value={{
          locale: this.state.language.locale,
          handleLanguageChange: this.handleLanguageChange,
        }}
      >
        <UserProvider
          value={{
            name: this.state.user.name,
            handleUserChange: this.handleUserChange,
          }}
        >
          <Provider store={store}>
            <ConnectedRouter history={history}>
              <div>
                <Layout>
                  <Header />
                  <Layout.Content>
                    <Switch>
                      <Route
                        path="/counter"
                        exact
                        strict
                        component={CounterPage}
                      />
                      <Route path="/restaurant" component={RestaurantPage} />
                      <Route
                        path="/order"
                        render={() => (
                          <OrderPage handleUserChange={this.handleUserChange} />
                        )}
                      />
                      <Route path="/order-complete" component={OrderComplete} />
                      <Route path="/404" render={() => <h1>404</h1>} />
                      <Redirect from="/" exact to="restaurant" />
                      <Route path="/" render={() => <h1>Page not found</h1>} />
                    </Switch>
                  </Layout.Content>
                </Layout>
              </div>
            </ConnectedRouter>
          </Provider>
        </UserProvider>
      </LanguageProvider>
    )
  }
}

export default App
