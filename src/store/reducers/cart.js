import {ADD_TO_CART, REMOVE_FROM_CART, CLEAR_CART} from '../common'

export const cartReducer = (
  cartState = {
    //  id: <dish's amount>
  },
  action
) => {
  switch (action.type) {
    case ADD_TO_CART: {
      const {id} = action.payload
      return {
        ...cartState,
        [id]: cartState[id] ? cartState[id] + 1 : 1,
      }
    }
    case REMOVE_FROM_CART: {
      const {id} = action.payload
      if (!cartState[id]) {
        return cartState
      }
      return {
        ...cartState,
        [id]: cartState[id] - 1,
      }
    }
    case CLEAR_CART: {
      const {dishesId} = action.payload
      const newCartState = {}
      if (!dishesId) {
        return cartState
      }
      for (let i = 0; i < dishesId.length; i++) {
        newCartState[dishesId[i]] = 0
      }
      return {
        ...cartState,
        ...newCartState,
      }
    }
    default: {
      return cartState
    }
  }
}
