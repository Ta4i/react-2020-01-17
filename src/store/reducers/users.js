import {normalizedUsers} from '../../fixtures'
import {ADD_REVIEW} from '../common'

const initUsersState = normalizedUsers.reduce((users, user) => {
  return {
    ...users,
    [user.id]: user,
  }
}, {})

export const usersReducer = (usersState = initUsersState, action) => {
  switch (action.type) {
    case ADD_REVIEW: {
      if (usersState[action.payload.userId]) {
        return usersState
      } else {
        return {
          ...usersState,
          [action.payload.userId]: {
            id: action.payload.userId,
            name: action.payload.userName,
          },
        }
      }
    }
    default: {
      return usersState
    }
  }
}
