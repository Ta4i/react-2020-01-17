import {normalizedReviews} from '../../fixtures'
import {ADD_REVIEW} from '../common'

const initialReviewsState = normalizedReviews.reduce((reviews, review) => {
  return {
    ...reviews,
    [review.id]: review,
  }
}, {})

export const reviewsReducer = (reviewsState = initialReviewsState, action) => {
  switch (action.type) {
    case ADD_REVIEW: {
      return {
        ...reviewsState,
        [action.payload.id]: {
          id: action.payload.id,
          userId: action.payload.userId,
          text: action.payload.text,
          rating: action.payload.rating,
        },
      }
    }
    default: {
      return reviewsState
    }
  }
}
