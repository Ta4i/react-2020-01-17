import {normalizedReviews} from '../../fixtures'

const initialState = normalizedReviews.reduce((reviews, review) => {
  return {
    ...reviews,
    [review.id]: review,
  }
}, {})

export const reviewsReducer = (reviewsState = initialState, action) => {
  // TODO ADD_REVIEW
  return reviewsState
}
