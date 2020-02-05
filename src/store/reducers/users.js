import {normalizedUsers} from '../../fixtures'
import {ADD_REVIEW} from '../common'

const initialState = normalizedUsers.reduce((users, user) => {
  return {
    ...users,
    [user.id]: user,
  }
}, {})

export const usersReducer = (usersState = initialState, action) => {
  if (action.type === ADD_REVIEW) {
    const {userData, newUserId} = action.payload

    if (userData.id) {
      return usersState
    }

    const newUsersState = {...usersState}
    newUsersState[newUserId] = {
      id: newUserId,
      name: userData.name,
    }
    return newUsersState
  } else {
    return usersState
  }
}
