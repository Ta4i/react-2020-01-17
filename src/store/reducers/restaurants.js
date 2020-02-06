import {normalizedRestaurants} from '../../fixtures'
import {CHANGE_RESTAURANT, UPDATE_RESTAURANTS} from '../common'

const DEFAULT_RESTAURANT = normalizedRestaurants[0].id

export const currentRestaurantIdReducer = (
  restaurantIdState = DEFAULT_RESTAURANT,
  action
) => {
  switch (action.type) {
    case CHANGE_RESTAURANT:
      const {id} = action.payload
      return id
    default:
      return restaurantIdState
  }
}

export const restaurantsReducer = (
  restaurantsState = normalizedRestaurants,
  action
) => {
  switch (action.type) {
    case UPDATE_RESTAURANTS:
      return action.payload
    default:
      return restaurantsState
  }
}
