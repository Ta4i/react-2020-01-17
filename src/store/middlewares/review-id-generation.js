import uuid from 'uuid/v4'
import {ADD_REVIEW} from '../common'

export const reviewIdGeneration = store => next => action => {
  if (action.type === ADD_REVIEW) {
    action.payload.newReviewId = uuid()
  }
  next(action)
}
