import {createSelector} from 'reselect'

export const selectId = (state, ownProps) => ownProps.id

export const selectCart = state => state.cart

export const selectRestaurantList = state => state.restaurants

export const selectDishes = state => state.dishes

export const selectReviews = state => state.reviews

export const selectUsers = state => state.users

export const selectDish = createSelector(
  selectDishes,
  selectId,
  (dishes, id) => {
    return dishes[id]
  }
)

export const selectReview = createSelector(
  selectReviews,
  selectId,
  (reviews, id) => {
    return reviews[id]
  }
)

export const selectUser = createSelector(selectUsers, selectId, (users, id) => {
  return users[id]
})

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
  (cart, restaurants) => {
    const orderedDishes = restaurants.reduce(
      (result, restaurant) => {
        restaurant.menu.forEach(dish => {
          const amount = cart[dish.id]
          if (amount) {
            const totalDishPrice = amount * dish.price
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
        dishes: [],
        totalPrice: 0,
      }
    )

    return {
      orderedDishes,
    }
  }
)
