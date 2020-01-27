import React, {Component} from 'react'
import styles from './restaurants-navigation.module.css'
import PropTypes from 'prop-types';

class RestaurantsNavigation extends Component {

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
    }).isRequired).isRequired,
    onRestaurantChange: PropTypes.func.isRequired
  }

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

export default RestaurantsNavigation
