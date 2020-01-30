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
      const newState = {...cartState}
      if (Number.isInteger(newState[id])) {
        if (newState[id] === 1) {
          delete newState[id]
        } else {
          newState[id]--
        }
      }
      return newState
    }
    default:
      return cartState
  }
}
