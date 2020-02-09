import React, {useCallback, useEffect, useState, useMemo} from 'react'
import PropTypes from 'prop-types'
import Restaurant from '../restaurant'
import RestaurantsNavigation from '../restaurants-navigation'
import {connect} from 'react-redux'
import {selectRestaurants, selectRestaurantsLoaded} from '../../store/selectors'
import {fetchRestaurants} from '../../store/action-creators'
import {fetchUsers} from '../../store/action-creators'
import Loader from '../loader'

function Restaurants(props) {
  const {restaurants, restaurantsLoaded, fetchRestaurants, fetchUsers} = props
  const [currentId, setCurrentId] = useState(null)

  useEffect(() => {
    fetchRestaurants && fetchRestaurants()
    fetchUsers && fetchUsers()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
    restaurantsLoaded && setCurrentId(currentId || restaurants[0].id)
  }, [currentId, restaurants, restaurantsLoaded])

  const currentRestaurant = useMemo(
    () => restaurants.find(item => item.id === currentId),
    [currentId, restaurants]
  )

  const handleRestaurantChange = useCallback(id => setCurrentId(id), [
    setCurrentId,
  ])

  return (
    <div data-automation-id="RESTAURANTS">
      {restaurantsLoaded && currentId ? (
        <>
          <RestaurantsNavigation
            restaurants={restaurants}
            onRestaurantChange={handleRestaurantChange}
          />
          <Restaurant restaurant={currentRestaurant} />
        </>
      ) : (
        <Loader tip="Loading restaurants" size="large" />
      )}
    </div>
  )
}

Restaurants.propTypes = {
  // connect
  restaurants: PropTypes.array,
  restaurantsLoaded: PropTypes.bool,
  fetchRestaurants: PropTypes.func,
  fetchUsers: PropTypes.func,
}

const mapStateToProps = state => ({
  restaurantsLoaded: selectRestaurantsLoaded(state),
  restaurants: selectRestaurants(state),
})

const mapDispatchToProps = {
  fetchRestaurants,
  fetchUsers,
}

export default connect(mapStateToProps, mapDispatchToProps)(Restaurants)
