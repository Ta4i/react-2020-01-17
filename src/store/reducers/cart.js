import ACTION_TYPES from '../action-types'

export const cartReducer = (cartState = {}, action) => {
  switch (action.type) {
    case ACTION_TYPES.ADD_TO_CART: {
      const {id} = action.payload
      return {
        ...cartState,
        [id]: cartState[id] ? cartState[id] + 1 : 1,
      }
    }
    case ACTION_TYPES.REMOVE_FROM_CART: {
      const {id} = action.payload

      if (Number.isInteger(cartState[id])) {
        const newState = {...cartState}
        if (newState[id] === 1) {
          delete newState[id]
        } else {
          newState[id]--
        }
        return newState
      }
      return cartState
    }
    default:
      return cartState
  }
}
