export const addToCart = id => {
  return {
    type: ACTION_NAMES.ADD_TO_CART,
    payload: {
      id,
    },
  }
}

export const removeFromCart = id => {
  return {
    type: ACTION_NAMES.REMOVE_FROM_CART,
    payload: {
      id,
    },
  }
}

export const ACTION_NAMES = {
  ADD_TO_CART: 'ADD_TO_CART',
  REMOVE_FROM_CART: 'REMOVE_FROM_CART',
}
