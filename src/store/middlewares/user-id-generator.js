import {ADD_REVIEW} from '../common'
import uuid from 'react-native-uuid'
import {selectUsers} from '../selectors'

export const userIdGenerator = store => next => action => {
  if (action.type === ADD_REVIEW) {
    const user = Object.values(selectUsers(store.getState())).find(
      user => user.name === action.payload.userName
    )
    action.payload.userId = user ? user.id : uuid.v4()
  }
  next(action)
}
