import {
  ADD_TO_CART,
  DECREMENT,
  INCREMENT,
  REMOVE_FROM_CART,
  ADD_REVIEW_TO_LIST,
  ADD_REVIEW_TO_RESTAURANT,
  ADD_USER,
} from '../common'

export const increment = () => {
  return {
    type: INCREMENT,
  }
}

export const decrement = () => {
  return {
    type: DECREMENT,
  }
}

export const addToCart = dishId => {
  return {
    type: ADD_TO_CART,
    payload: {
      id: dishId,
    },
  }
}

export const removeFromCart = dishId => {
  return {
    type: REMOVE_FROM_CART,
    payload: {
      id: dishId,
    },
  }
}

export const addReviewToList = value => {
  return {
    type: ADD_REVIEW_TO_LIST,
    payload: value,
  }
}
export const addReviewToRestaurant = value => {
  return {
    type: ADD_REVIEW_TO_RESTAURANT,
    payload: value,
  }
}
export const addUser = value => {
  return {
    type: ADD_USER,
    payload: value,
  }
}
