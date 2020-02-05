import {normalizedUsers} from '../../fixtures'
import {ADD_USER} from '../common'

const initialUsers = normalizedUsers.reduce((users, user) => {
  return {
    ...users,
    [user.id]: user,
  }
}, {})

export const usersReducer = (usersState = initialUsers, action) => {
  switch (action.type) {
    case ADD_USER:
      const newUser = action.payload
      return {
        ...usersState,
        ...newUser,
      }
    default:
      return usersState
  }
}
