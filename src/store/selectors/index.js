import {createSelector} from 'reselect'

export const selectId = (state, ownProps) => ownProps.id

export const selectCart = state => state.cart

export const selectRestaurantList = state => state.restaurants

export const selectDishes = state => state.dishes

export const selectReviews = state => state.reviews

// export const selectReview = createSelector(
//     selectReviews,
//     selectId,
//     (reviews, id) => {
//         return reviews[id]
//     }
// )

export const selectDish = createSelector(
  selectDishes,
  selectId,
  (dishes, id) => {
    return dishes[id]
  }
)

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
            const totalDishPrice = amount * dishes[dishId].price
            const dishName = dishes[dishId].name
            const price = dishes[dishId].price
            result.totalPrice += totalDishPrice
            result.dishes.push({
              dishId,
              dishName,
              price,
              amount,
              totalDishPrice,
            })
          }
        })
        return result
      },
      {
        dishes: [],
        totalPrice: 0,
      }
    )
    return {
      orderedDishes,
    }
  }
)
