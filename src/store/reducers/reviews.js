import {arrayToMap} from '../utils'
import {ADD_REVIEW, FETCH_REVIEWS} from '../common'

export const reviewsReducer = (reviewsState = [], action) => {
  switch (action.type) {
    case FETCH_REVIEWS: {
      return arrayToMap(action.response)
    }
    case ADD_REVIEW: {
      return {
        ...reviewsState,
        [action.generatedId]: {
          id: action.generatedId,
          userId: action.userId,
          text: action.payload.text,
          rating: action.payload.rating,
        },
      }
    }
    default:
      return reviewsState
  }
}
