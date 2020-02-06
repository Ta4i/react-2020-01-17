import {normalizedRestaurants} from '../../fixtures'
import {ADD_REVIEW} from '../common'

export const restaurantsReducer = (
  restaurantsState = normalizedRestaurants,
  action
) => {
  switch (action.type) {
    case ADD_REVIEW: {
      const newRestaurantsState = [...restaurantsState]
      const restaurant = newRestaurantsState.find(
        restaurant => restaurant.id === action.payload.restaurantId
      )
      restaurant.reviews.push(action.payload.id)
      return newRestaurantsState
    }
    default: {
      return restaurantsState
    }
  }
}
