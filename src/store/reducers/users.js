import {normalizedUsers} from '../../fixtures'
import {ADD_USER} from '../common'

const initialState = normalizedUsers.reduce((reviews, review) => {
  return {
    ...reviews,
    [review.id]: review,
  }
}, {})

export const usersReducer = (usersState = initialState, action) => {
  switch (action.type) {
    case ADD_USER:
      usersState[action.payload.userId] = {
        id: action.payload.userId,
        name: action.payload.userName,
      }
      return {...usersState}
    default: {
      return usersState
    }
  }
}
