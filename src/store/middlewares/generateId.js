import {ADD_REVIEW_TO_LIST} from '../common'
import {
  addUser,
  addReviewToRestaurant,
  addReviewToList,
} from '../action-creators'

const generateId = () =>
  ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, c =>
    (
      c ^
      (crypto.getRandomValues(new Uint8Array(1))[0] & (15 >> (c / 4)))
    ).toString(16)
  )

export const generateID = store => next => action => {
  if (action.type === ADD_REVIEW_TO_LIST) {
    const {users} = store.getState()
    let userId = generateId()
    for (let key in users) {
      if (users[key].name === action.payload.userName) {
        userId = users[key].id
      }
    }
    const nextPayload = {
      id: generateId(),
      userId: userId,
      userName: action.payload.userName,
      text: action.payload.text,
      rating: action.payload.rating,
      restaurantId: action.payload.restaurantId,
    }

    next(addUser(nextPayload))
    next(addReviewToList(nextPayload))
    next(addReviewToRestaurant(nextPayload))
    // console.log('after->', store.getState())
  }
  next(action)
}
