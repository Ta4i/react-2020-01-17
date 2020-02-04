import {normalizedUsers} from '../../fixtures'

const initialUsers = normalizedUsers.reduce((users, user) => {
  return {
    ...users,
    [user.id]: user,
  }
}, {})

export const usersReducer = (usersState = initialUsers, action) => {
  return usersState
}
