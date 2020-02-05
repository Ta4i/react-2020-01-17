import {createSelector} from 'reselect'
import {selectId, selectIds} from './common'

export const selectReviews = state => state.reviews

export const selectReview = createSelector(
  selectReviews,
  selectId,
  (reviews, id) => {
    return reviews[id]
  }
)

export const selectAverageRating = createSelector(
  selectReviews,
  selectIds,
  (reviews, ids) => {
    const totalRating = ids.reduce((acc, id) => {
      return acc + reviews[id].rating
    }, 0)
    return totalRating / ids.length
  }
)
