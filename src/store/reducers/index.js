import {combineReducers} from 'redux'
import {restaurantsReducer} from './restaurants'
import {cartReducer} from './cart'
import {orderReducer} from './order'

export const reducer = combineReducers({
  counter: (counterState = 10, action) => {
    return action.type === 'INCREASE' ? counterState + 1 : counterState
  },
  restaurants: restaurantsReducer,
  cart: cartReducer,
  isVisible: orderReducer,
})
