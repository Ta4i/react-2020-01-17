import ACTION_TYPES from '../action-types'

export const orderReducer = (orderState = false, action) => {
  switch (action.type) {
    case ACTION_TYPES.SHOW_ORDER: {
      return true
    }
    case ACTION_TYPES.HIDE_ORDER: {
      return false
    }
    default:
      return orderState
  }
}
