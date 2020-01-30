import ACTION_TYPES from '../action-types'

const removeFromCart = id => ({
  type: ACTION_TYPES.REMOVE_FROM_CART,
  payload: {
    id,
  },
})

export default removeFromCart
