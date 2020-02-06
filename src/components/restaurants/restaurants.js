import React, {useCallback} from 'react'
import PropTypes from 'prop-types'
import Restaurant from '../restaurant'
import RestaurantsNavigation from '../restaurants-navigation'
import {connect, useDispatch, useSelector} from 'react-redux'
import {selectRestaurantList, selectRestaurantId} from '../../store/selectors'
import {changeRestaurant} from '../../store/action-creators'

function Restaurants(props) {
  const dispatch = useDispatch()
  const handleRestaurantChange = useCallback(
    id => dispatch(changeRestaurant(id)),
    [dispatch]
  )
  const restaurantId = useSelector(state => selectRestaurantId(state))

  return (
    <div>
      <RestaurantsNavigation
        restaurants={props.restaurants}
        onRestaurantChange={handleRestaurantChange}
      />
      <Restaurant id={restaurantId} />
    </div>
  )
}

Restaurants.propTypes = {
  restaurants: PropTypes.arrayOf(PropTypes.object),
}

const mapStateToProps = state => ({
  restaurants: selectRestaurantList(state),
})

export default connect(mapStateToProps)(Restaurants)
