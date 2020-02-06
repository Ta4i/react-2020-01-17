import {ADD_TO_CART, REMOVE_FROM_CART} from '../common'

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
      const amount = cartState[id] - 1
      const newCartState = {...cartState}
      if (!cartState[id]) {
        return cartState
      }
      if (amount > 0) {
        newCartState[id] = amount
      } else {
        delete newCartState[id]
      }
      return newCartState
    }
    default: {
      return cartState
    }
  }
}
