import React, {useCallback, useEffect, useRef, useState} from 'react'
import Restaurant from '../restaurant'
import RestaurantsNavigation from '../restaurants-navigation'
import {connect} from 'react-redux'
import {selectRestaurants} from '../../store/selectors'
import {fetchRestaurants, fetchUsers} from '../../store/action-creators'

function Restaurants(props) {
  const {restaurants, fetchRestaurants, fetchUsers} = props
  const [currentId, setCurrentId] = useState(null)

  useEffect(() => {
    fetchRestaurants && fetchRestaurants()
    fetchUsers && fetchUsers()
  }, [])

  const restaurant = restaurants.find(restaurant => restaurant.id === currentId)
  const handleRestaurantChange = useCallback(id => setCurrentId(id), [
    setCurrentId,
  ])

  useEffect(() => {
    if (restaurants.length === 0) {
      return
    }
    setCurrentId(currentId || restaurants[0].id)
  }, [restaurants.length])

  if (restaurants.length === 0 || !currentId) {
    return <h1>Loading...</h1>
  }

  return (
    <div data-automation-id="RESTAURANTS">
      <RestaurantsNavigation
        restaurants={props.restaurants}
        onRestaurantChange={handleRestaurantChange}
      />
      <Restaurant restaurant={restaurant} />
    </div>
  )
}

const mapStateToProps = state => ({
  restaurants: selectRestaurants(state),
})

const mapDispatchToProps = {
  fetchRestaurants,
  fetchUsers,
}

export default connect(mapStateToProps, mapDispatchToProps)(Restaurants)
