import React, {useCallback, useMemo, useState} from 'react'
import PropTypes from 'prop-types'
import Restaurant, {RestaurantProps} from '../restaurant'
import RestaurantsNavigation from '../restaurants-navigation'
import {connect} from 'react-redux'
import {selectRestaurantList, selectReviews} from '../../store/selectors'

function Restaurants(props) {
  const [currentId, setCurrentId] = useState(props.restaurants[0].id)
  const restaurant = useMemo(() => {
    return props.restaurants.find(restaurant => restaurant.id === currentId)
  }, [currentId, props.restaurants])

  let currentReviews = []
  for (let item of restaurant.reviews) {
    for (let key in props.reviews) {
      if (item === key) {
        currentReviews.push(props.reviews[key])
      }
    }
  }
  const handleRestaurantChange = useCallback(id => setCurrentId(id), [
    setCurrentId,
  ])
  return (
    <div>
      <RestaurantsNavigation
        restaurants={props.restaurants}
        onRestaurantChange={handleRestaurantChange}
      />
      <Restaurant
        restaurant={restaurant}
        reviews={currentReviews}
        currentRest={currentId}
      />
    </div>
  )
}

Restaurants.propTypes = {
  restaurants: PropTypes.arrayOf(PropTypes.shape(RestaurantProps.restaurant)),
}

const mapStateToProps = state => ({
  restaurants: selectRestaurantList(state),
  reviews: selectReviews(state),
})

export default connect(mapStateToProps)(Restaurants)
