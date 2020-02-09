import uuid from 'uuid/v4'
import {selectUsersList} from '../selectors'

export default store => next => action => {
  const {provideUserId, ...rest} = action
  if (!provideUserId) {
    next(rest)
  } else {
    const user = selectUsersList(store.getState()).find(
      user => user.name === rest.payload.userName
    )
    next({
      ...rest,
      userId: user ? user.id : uuid(),
    })
  }
}
