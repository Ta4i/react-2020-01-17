import {normalizedReviews} from '../../fixtures'
import {PUBLISH_REVIEW} from '../common'

const initialReviews = normalizedReviews.reduce((reviews, review) => {
  return {
    ...reviews,
    [review.id]: review,
  }
}, {})

export const reviewsReducer = (reviewsState = initialReviews, action) => {
  switch (action.type) {
    case PUBLISH_REVIEW:
      const newUser = action.payload
      return {
        ...reviewsState,
        ...newUser,
      }
    default:
      return reviewsState
  }
}
