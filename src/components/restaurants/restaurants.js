import React, {useCallback, useMemo, useState} from 'react'
import Restaurant from '../restaurant'
import RestaurantsNavigation from '../restaurants-navigation'
import PropTypes from 'prop-types';

function Restaurants(props) {
  const [currentId, setCurrentId] = useState(props.restaurants[0].id)

  const restaurant = useMemo(() => {
    return props.restaurants.find(restaurant => restaurant.id === currentId)
  }, [currentId, props.restaurants])

  const handleRestaurantChange = useCallback(id => setCurrentId(id), [
    setCurrentId,
  ])
  return (
    <div>
      <RestaurantsNavigation
        restaurants={props.restaurants}
        onRestaurantChange={handleRestaurantChange}
      />
      <Restaurant restaurant={restaurant} />
    </div>
  )
}

Restaurants.propTypes = {
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

export default Restaurants
