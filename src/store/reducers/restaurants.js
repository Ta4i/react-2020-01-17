import {normalizedRestaurants} from '../../fixtures'
import {ADD_REVIEW} from '../common'

export const restaurantsReducer = (
  restaurantsState = normalizedRestaurants,
  action
) => {
  if (action.type === ADD_REVIEW) {
    const {restaurantId, newReviewId} = action.payload
    const newRestaurantsState = [...restaurantsState]
    const restaurantIndex = newRestaurantsState.findIndex(
      item => item.id === restaurantId
    )
    newRestaurantsState[restaurantIndex].reviews.push(newReviewId)
    return newRestaurantsState
  } else {
    return restaurantsState
  }
}
