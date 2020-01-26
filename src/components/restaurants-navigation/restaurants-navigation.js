import React from 'react'
import PropTypes from 'prop-types'
import styles from './restaurants-navigation.module.css'

const RestaurantsNavigation = ({
  restaurants,
  onRestaurantChange,
  currentRestaurantId,
}) => (
  <div className={styles.list}>
    {restaurants.map(({id, name}) => (
      <span
        data-automation-id="RESTAURANT_NAVIGATION"
        className={
          id === currentRestaurantId
            ? `${styles.restaurant} ${styles.active}`
            : styles.restaurant
        }
        key={id}
        onClick={() => onRestaurantChange(id)}
      >
        {name}
      </span>
    ))}
  </div>
)

RestaurantsNavigation.propTypes = {
  restaurants: PropTypes.array.isRequired,
  onRestaurantChange: PropTypes.func.isRequired,
  currentRestaurantId: PropTypes.string.isRequired,
}

RestaurantsNavigation.defaultProps = {
  restaurants: [],
  onRestaurantChange: () => {},
  currentRestaurantId: 0,
}

export default RestaurantsNavigation
