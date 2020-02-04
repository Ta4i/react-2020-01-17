import React, {Component} from 'react'
import PropTypes from 'prop-types'
import Dishes from '../dishes'
import AverageRating from '../average-rating'
import Reviews from '../reviews'
import Hero from '../hero'
import styles from './restaurant.module.css'
import {Col, Row} from 'antd'
import Order from '../order'

export const RestaurantProps = {
  restaurant: PropTypes.shape({
    name: PropTypes.string,
    menu: PropTypes.array,
    reviews: PropTypes.array,
  }).isRequired,
}

class Restaurant extends Component {
  static propTypes = RestaurantProps

  state = {
    error: null,
  }

  componentDidCatch(error, errorInfo) {
    this.setState({
      error,
    })
  }

  render() {
    const {
      restaurant: {name, menu},
    } = this.props
    return (
      <div data-automation-id="RESTAURANT_CONTAINER">
        <Hero heading={name}>
          {<AverageRating reviews={this.props.reviews} />}
        </Hero>
        <Row>
          <Col span={18} className={styles.restaurantContent}>
            <Reviews reviews={this.props.reviews} />
            <Dishes menu={menu} />
          </Col>
          <Col span={6}>
            <Order />
          </Col>
        </Row>
      </div>
    )
  }
}

export default Restaurant
