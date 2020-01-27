import React, {Component} from 'react'
import Restaurants from '../restaurants'
import {Layout} from 'antd'
import Header from '../header'
import PropTypes from 'prop-types';

class App extends Component {

  static propTypes = {
    restaurants: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      location: PropTypes.shape({
        lat: PropTypes.number,
        lng: PropTypes.number
      }),
      image: PropTypes.string,
      menu: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
        ingredients: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired
      }).isRequired).isRequired,
      reviews: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
        user: PropTypes.string.isRequired,
        text: PropTypes.string.isRequired,
        rating: PropTypes.number.isRequired
      }))
    }).isRequired).isRequired
  }

  render() {
    const {restaurants} = this.props
    return (
      <div>
        <Layout>
          <Header />
          <Layout.Content>
            <Restaurants restaurants={restaurants} />
          </Layout.Content>
        </Layout>
      </div>
    )
  }
}

export default App
