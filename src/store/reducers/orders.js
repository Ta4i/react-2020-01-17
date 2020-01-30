import {SHOW_ORDERS, HIDE_ORDERS} from '../actionTypes/actionTypes'
export const ordersReducer = (ordersState = {showOrders: false}, action) => {
  switch (action.type) {
    case SHOW_ORDERS: {
      return {
        ...ordersState,
        showOrders: true,
      }
    }
    case HIDE_ORDERS: {
      return {
        ...ordersState,
        showOrders: false,
      }
    }
    default:
      return ordersState
  }
}
