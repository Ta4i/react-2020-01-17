import ACTION_TYPES from '../action-types'

const addToCart = id => ({
  type: ACTION_TYPES.ADD_TO_CART,
  payload: {
    id,
  },
})

export default addToCart
