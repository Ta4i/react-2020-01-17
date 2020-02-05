import {ADD_TO_CART, REMOVE_FROM_CART, ADD_REVIEW} from '../common'

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

export const addReview = (reviewData, userData, restaurantId) => {
  return {
    type: ADD_REVIEW,
    payload: {
      reviewData,
      userData,
      restaurantId,
    },
  }
}
