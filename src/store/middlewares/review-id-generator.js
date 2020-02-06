import {ADD_REVIEW} from '../common'
import uuid from 'react-native-uuid'

export const reviewIdGenerator = store => next => action => {
  if (action.type === ADD_REVIEW) {
    action.payload.id = uuid.v4()
  }
  next(action)
}
