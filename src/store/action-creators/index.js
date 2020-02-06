import {
  ADD_TO_CART,
  DECREMENT,
  INCREMENT,
  REMOVE_FROM_CART,
  CHANGE_RESTAURANT,
  PUBLISH_REVIEW,
  UPDATE_RESTAURANTS,
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

export const changeRestaurant = id => {
  return {
    type: CHANGE_RESTAURANT,
    payload: {
      id,
    },
  }
}

export const publishReview = (review = {}) => {
  return {
    type: PUBLISH_REVIEW,
    payload: review,
  }
}

export const updateRestaurants = restaurants => {
  return {
    type: UPDATE_RESTAURANTS,
    payload: restaurants,
  }
}

export const addUser = user => {
  return {
    type: ADD_USER,
    payload: user,
  }
}
