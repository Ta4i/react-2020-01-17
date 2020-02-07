import {normalizedUsers} from '../../fixtures'

const initialState = normalizedUsers.reduce((users, user) => {
  return {
    ...users,
    [user.id]: user,
  }
}, {})

export const usersReducer = (usersState = initialState, action) => {
  // TODO ADD_USER
  return usersState
}
