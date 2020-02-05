import {createSelector} from 'reselect'

export const selectId = (state, ownProps) => ownProps.id

export const selectIds = (state, ownProps) => ownProps.ids

export const selectCart = state => state.cart

export const selectRestaurantList = state => state.restaurants

export const selectDishes = state => state.dishes

export const selectReviews = state => state.reviews

export const selectUsers = state => state.users

export const selectRestaurantId = state => state.currentRestaurantId

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

export const selectAverageRating = createSelector(
  selectReviews,
  selectIds,
  (reviews, ids) => {
    const ratings = ids.map(id => reviews[id].rating)
    const averageRating =
      ratings.reduce((acc, rating) => acc + rating, 0) / ratings.length
    const normalizedRating = Math.floor(averageRating * 2) / 2
    return normalizedRating
  }
)

export const selectRestaurant = createSelector(
  selectRestaurantList,
  selectId,
  (restaurants, id) => {
    const restaurantsMap = restaurants.reduce(
      (acc, restaurant) => ({
        ...acc,
        [restaurant.id]: restaurant,
      }),
      {}
    )
    return restaurantsMap[id]
  }
)
