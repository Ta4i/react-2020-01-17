import {normalizedRestaurants} from '../../fixtures'
import {ADD_REVIEW_TO_RESTAURANT} from '../common'

export const restaurantsReducer = (
  restaurantsState = normalizedRestaurants,
  action
) => {
  switch (action.type) {
    case ADD_REVIEW_TO_RESTAURANT:
      for (let el of restaurantsState) {
        if (el.id === action.payload.restaurantId) {
          el.reviews.push(action.payload.id)
        }
      }
      return [...restaurantsState]
    default: {
      return restaurantsState
    }
  }
}
