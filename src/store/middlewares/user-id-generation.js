import uuid from 'uuid/v4'
import {ADD_REVIEW} from '../common'

export const userIdGeneration = store => next => action => {
  if (action.type === ADD_REVIEW) {
    action.payload.newUserId = uuid()
  }
  next(action)
}
