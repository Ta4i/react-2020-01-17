import {combineReducers} from 'redux'
import {restaurantsReducer} from './restaurants'
import {cartReducer} from './cart'
import {orderReducer} from './order'

export const reducer = combineReducers({
  restaurants: restaurantsReducer,
  cart: cartReducer,
  orderVisible: orderReducer,
})
