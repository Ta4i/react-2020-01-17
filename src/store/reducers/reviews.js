import {ADD_REVIEW, FETCH_REVIEWS} from '../common'
import {arrayToMap} from '../utils'

export const reviewsReducer = (reviewsState = {}, action) => {
  switch (action.type) {
    case FETCH_REVIEWS: {
      return arrayToMap(action.response)
    }
    case ADD_REVIEW: {
      const newReviewsState = {...reviewsState}
      const {generatedId, userId, payload} = action
      newReviewsState[action.generatedId] = {
        id: generatedId,
        userId,
        text: payload.text,
        rating: payload.rating,
      }
      return newReviewsState
    }
    default:
      return reviewsState
  }
}
