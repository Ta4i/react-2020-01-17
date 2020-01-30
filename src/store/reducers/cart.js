import {ACTIONS} from '../action-types'

export const cartReducer = (cartState = {}, action) => {
  switch (action.type) {
    case ACTIONS.CART.ADD_TO_CART: {
      const {id} = action.payload
      return {
        ...cartState,
        [id]: cartState[id] ? cartState[id] + 1 : 1,
      }
    }
    case ACTIONS.CART.TAKE_OFF_FROM_CART: {
      const {id} = action.payload
      const decreaseCondition =
        typeof cartState[id] === 'number' && cartState[id] > 1
      const updatedState = {...cartState}
      decreaseCondition
        ? (updatedState[id] = updatedState[id] - 1)
        : delete updatedState[id]
      return updatedState
    }
    default:
      return cartState
  }
}
