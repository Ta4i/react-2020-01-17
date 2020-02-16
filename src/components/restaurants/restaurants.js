import React, {useEffect} from 'react'
import Restaurant from '../restaurant'
import RestaurantsNavigation from '../restaurants-navigation'
import {connect} from 'react-redux'
import {
  selectRestaurants,
  selectRestaurantsLoaded,
  selectRestaurantsLoading,
} from '../../store/selectors'
import {fetchRestaurants, validateRestaurant} from '../../store/action-creators'
import Loader from '../loader'

function Restaurants({
  restaurantId,
  restaurants,
  restaurantsLoading,
  restaurantsLoaded,
  fetchRestaurants,
  validateRestaurant,
}) {
  useEffect(() => {
    !restaurantsLoading && !restaurantsLoaded && fetchRestaurants()
  }, [fetchRestaurants, restaurantsLoading, restaurantsLoaded])

  useEffect(() => {
    validateRestaurant(restaurantId)
  }, [restaurantsLoaded, restaurantId, validateRestaurant])

  if (restaurantsLoading) {
    return <Loader />
  }

  const restaurant = restaurants.find(
    restaurant => restaurant.id === restaurantId
  )

  return (
    <div data-automation-id="RESTAURANTS">
      <RestaurantsNavigation restaurants={restaurants} />
      <Restaurant restaurant={restaurant} />
    </div>
  )
}

const mapStateToProps = state => ({
  restaurants: selectRestaurants(state),
  restaurantsLoading: selectRestaurantsLoading(state),
  restaurantsLoaded: selectRestaurantsLoaded(state),
})

const mapDispatchToProps = {
  fetchRestaurants,
  validateRestaurant,
}

export default connect(mapStateToProps, mapDispatchToProps)(Restaurants)
