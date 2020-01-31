export const addToCart = id => {
  return {
    type: 'ADD_TO_CART',
    payload: {
      id,
    },
  }
}

export const deleteToCart = id => {
  return {
    type: 'DELETE_FROM_CART',
    payload: {
      id,
    },
  }
}
