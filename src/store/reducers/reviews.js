import {normalizedReviews} from '../../fixtures'

const initialReviewsState = normalizedReviews.reduce((reviews, review) => {
  return {
    ...reviews,
    [review.id]: review,
  }
}, {})

export const reviewsReducer = (reviewsState = initialReviewsState, action) => {
  return reviewsState
}
