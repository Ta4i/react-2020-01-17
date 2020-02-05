import {normalizedUsers} from '../../fixtures'
import {ADD_USER} from '../common'

const initialState = normalizedUsers.reduce((reviews, review) => {
  return {
    ...reviews,
    [review.id]: review,
  }
}, {})

export const usersReducer = (usersState = initialState, action) => {
  let x
  switch (action.type) {
    case ADD_USER:
      // for (let key in usersState){
      //     console.log(usersState[key].name);
      //     if (usersState[key].name === action.payload.userName){
      //
      //     }else{
      //         x
      //     }
      // }
      usersState[action.payload.id] = {
        id: action.payload.id,
        name: action.payload.userName,
      }
      return {...usersState}
    default: {
      return usersState
    }
  }
}
