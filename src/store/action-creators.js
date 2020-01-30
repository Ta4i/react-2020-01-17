import {ACTIONS} from './action-types'

export const addToCart = id => {
  return {
    type: ACTIONS.CART.ADD_TO_CART,
    payload: {
      id,
    },
  }
}

export const takeOffFromCart = id => {
  return {
    type: ACTIONS.CART.TAKE_OFF_FROM_CART,
    payload: {
      id,
    },
  }
}
