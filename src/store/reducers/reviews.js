import {normalizedReviews} from '../../fixtures'
import {ADD_REVIEW} from '../common'

const initialState = normalizedReviews.reduce((reviews, review) => {
  return {
    ...reviews,
    [review.id]: review,
  }
}, {})

export const reviewsReducer = (reviewsState = initialState, action) => {
  if (action.type === ADD_REVIEW) {
    const {reviewData, userData, newReviewId, newUserId} = action.payload
    return {
      ...reviewsState,
      [newReviewId]: {
        id: newReviewId,
        userId: userData.id || newUserId,
        text: reviewData.text,
        rating: reviewData.rating,
      },
    }
  } else {
    return reviewsState
  }
}
