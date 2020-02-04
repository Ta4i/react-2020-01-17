import {normalizedReviews} from '../../fixtures'

const initialReviews = normalizedReviews.reduce((reviews, review) => {
  return {
    ...reviews,
    [review.id]: review,
  }
}, {})

export const reviewsReducer = (reviewsState = initialReviews, action) => {
  return reviewsState
}
