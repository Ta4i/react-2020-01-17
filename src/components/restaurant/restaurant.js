import React, {Component} from 'react'
import Dishes from '../dishes'
import AverageRating from '../average-rating'
import Reviews from '../reviews'
import Hero from '../hero'
import styles from './restaurant.module.css'
import PropTypes from 'prop-types'

class Restaurant extends Component {
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
      restaurant: {name, menu, reviews},
    } = this.props
    return (
      <div data-automation-id="RESTAURANT_CONTAINER">
        <Hero heading={name}>
          <AverageRating reviews={reviews} />
        </Hero>
        <div className={styles.restaurantContent}>
          <Reviews reviews={reviews} />
          {!this.state.error && <Dishes menu={menu} />}
        </div>
      </div>
    )
  }
}
Restaurant.propTypes = {
  restaurant: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    location: PropTypes.object,
    image: PropTypes.string,
    menu: PropTypes.array,
    reviews: PropTypes.array,
  }).isRequired, //Ожидаем получить  объект c такой структурой
}
export default Restaurant
