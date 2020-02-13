import React, {useEffect} from 'react'
import Restaurant from '../restaurant'
import RestaurantsNavigation from '../restaurants-navigation'
import {connect} from 'react-redux'
import {
  selectRestaurants,
  selectRestaurantsLoaded,
  selectRestaurantsLoading,
} from '../../store/selectors'
import {fetchRestaurants} from '../../store/action-creators'
import Loader from '../loader'
import {useParams} from 'react-router-dom'

function Restaurants({
  restaurants,
  restaurantsLoading,
  restaurantsLoaded,
  fetchRestaurants,
}) {
  const {currentId} = useParams()

  useEffect(() => {
    !restaurantsLoading && !restaurantsLoaded && fetchRestaurants()
  }, [fetchRestaurants, restaurantsLoading, restaurantsLoaded])

  if (restaurantsLoading) {
    return <Loader />
  }

  const restaurant = restaurants.find(restaurant => restaurant.id === currentId)

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
}

export default connect(mapStateToProps, mapDispatchToProps)(Restaurants)
