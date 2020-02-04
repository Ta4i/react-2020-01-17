import {combineReducers} from 'redux'
import {countReducer} from './count'
import {restaurantsReducer} from './restaurants'
import {cartReducer} from './cart'
import {dishesReducer} from './dishes'
import {reviewsReducer} from './reviews'
export const reducer = combineReducers({
  count: countReducer,
  restaurants: restaurantsReducer,
  cart: cartReducer,
  dishes: dishesReducer,
  reviews: reviewsReducer,
})
