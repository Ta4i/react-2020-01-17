import {normalizedReviews} from '../../fixtures'
import {ADD_REVIEW_TO_LIST} from '../common'

const initialState = normalizedReviews.reduce((reviews, review) => {
  return {
    ...reviews,
    [review.id]: review,
  }
}, {})

export const reviewsReducer = (reviewsState = initialState, action) => {
  switch (action.type) {
    case ADD_REVIEW_TO_LIST:
      return Object.assign(reviewsState, {[action.payload.id]: action.payload})
    default: {
      return reviewsState
    }
  }
}
