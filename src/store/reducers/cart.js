import {ACTION_NAMES} from '../action-creators'

export const cartReducer = (cartState = {}, action) => {
  switch (action.type) {
    case ACTION_NAMES.ADD_TO_CART: {
      const {id} = action.payload
      return {
        ...cartState,
        [id]: cartState[id] ? cartState[id] + 1 : 1,
      }
    }
    case ACTION_NAMES.REMOVE_FROM_CART: {
      const {id} = action.payload
      if (!cartState[id]) {
        return cartState
      }
      const newCartState = {
        ...cartState,
        [id]: cartState[id] - 1,
      }
      if (newCartState[id] === 0) {
        delete newCartState[id]
      }
      return newCartState
    }
    default:
      return cartState
  }
}
