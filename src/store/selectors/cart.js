import {createSelector} from 'reselect'
import {selectId} from './common'
import {selectRestaurantList} from './restaurants'
import {selectDishes} from './dishes'

export const selectCart = state => state.cart

export const selectAmountFromCart = createSelector(
  selectCart,
  selectId,
  (cart, id) => {
    return cart[id] || 0
  }
)

export const selectCartInfo = createSelector(
  selectCart,
  selectRestaurantList,
  selectDishes,
  (cart, restaurants, dishes) => {
    const orderedDishes = restaurants.reduce(
      (result, restaurant) => {
        restaurant.menu.forEach(dishId => {
          const amount = cart[dishId]
          if (amount) {
            const dish = dishes[dishId]
            result.totalAmount += amount
            const totalDishPrice = dish.price * amount
            result.totalPrice += totalDishPrice
            result.dishes.push({
              dish,
              amount,
              totalDishPrice,
            })
          }
        })
        return result
      },
      {
        totalAmount: 0,
        totalPrice: 0,
        dishes: [],
      }
    )
    return {
      orderedDishes,
    }
  }
)
