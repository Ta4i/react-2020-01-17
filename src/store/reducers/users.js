import {normalizedUsers} from '../../fixtures'

const initUsersState = normalizedUsers.reduce((users, user) => {
  return {
    ...users,
    [user.id]: user,
  }
}, {})

export const usersReducer = (usersState = initUsersState, action) => {
  return usersState
}
