import React, {Component} from 'react'
import PropTypes from 'prop-types'
import Dishes from '../dishes'
import AverageRating from '../average-rating'
import Reviews from '../reviews'
import Hero from '../hero'
import styles from './restaurant.module.css'

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
        {this.state.error ? (
          <p>Oooops... there's an error, we're already fixing it</p>
        ) : (
          <>
            <Hero heading={name}>
              <AverageRating reviews={reviews} />
            </Hero>
            <div className={styles.restaurantContent}>
              <Reviews reviews={reviews} />
              <Dishes menu={menu} />
            </div>
          </>
        )}
      </div>
    )
  }
}

Restaurant.propTypes = {
  restaurant: PropTypes.object.isRequired,
}

export default Restaurant
