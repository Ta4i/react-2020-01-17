export const orderReducer = (orderState = false, action) => {
  switch (action.type) {
    case 'TRANSFORM_MODAL': {
      return action.payload.isVisible
    }
    default:
      return orderState
  }
}
