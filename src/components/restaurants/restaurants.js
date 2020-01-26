import React, {useCallback, useMemo, useState} from 'react'
import PropTypes from 'prop-types'
import Restaurant from '../restaurant'
import RestaurantsNavigation from '../restaurants-navigation'

const Restaurants = ({restaurants}) => {
  const [currentId, setCurrentId] = useState(restaurants[0].id)

  const restaurant = useMemo(() => {
    return restaurants.find(restaurant => restaurant.id === currentId)
  }, [currentId, restaurants])

  const handleRestaurantChange = useCallback(id => setCurrentId(id), [
    setCurrentId,
  ])
  return (
    <div>
      <RestaurantsNavigation
        restaurants={restaurants}
        onRestaurantChange={handleRestaurantChange}
        currentRestaurantId={currentId}
      />
      <Restaurant restaurant={restaurant} />
    </div>
  )
}

Restaurants.propTypes = {
  restaurants: PropTypes.array.isRequired,
}

Restaurants.defaultProps = {
  restaurants: [],
}

export default Restaurants
