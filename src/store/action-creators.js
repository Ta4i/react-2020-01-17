export const addToCart = id => {
  return {
    type: 'ADD_TO_CART',
    payload: {
      id,
    },
  }
}

export const removeFromCard = id => {
  return {
    type: 'REMOVE_FROM_CART',
    payload: {
      id,
    },
  }
}
