import {arrayToMap} from '../utils'
import {ADD_REVIEW, FETCH_REVIEWS} from '../common'
import {produce} from 'immer'

export const reviewsReducer = (reviewsState = {}, action) =>
  produce(reviewsState, draft => {
    switch (action.type) {
      case FETCH_REVIEWS: {
        return arrayToMap(action.response)
      }
      case ADD_REVIEW: {
        draft[action.generatedId] = {
          id: action.generatedId,
          userId: action.userId,
          text: action.payload.text,
          rating: action.payload.rating,
        }
        break
      }
      default:
        return
    }
  })
