import React, {Component} from 'react'
import styles from './restaurants-navigation.module.css'
import PropTypes from 'prop-types'

class RestaurantsNavigation extends Component {
  render() {
    const {restaurants, onRestaurantChange} = this.props
    return (
      <div className={styles.list}>
        {restaurants.map(({id, name}) => (
          <span
            data-automation-id="RESTAURANT_NAVIGATION"
            className={styles.restaurant}
            key={id}
            onClick={() => onRestaurantChange(id)}
          >
            {name}
          </span>
        ))}
      </div>
    )
  }
}

RestaurantsNavigation.defaultProps = {
  restaurants: [],
}
RestaurantsNavigation.propTypes = {
  restaurants: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
    })
  ).isRequired,
}

export default RestaurantsNavigation
