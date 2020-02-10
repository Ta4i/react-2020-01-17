import {createSelector} from 'reselect'

export const selectRestaurants = state => state.restaurants

export const selectCart = state => state.cart

export const selectDishesMap = store => store.dishes

export const selectReviewsMap = store =>
  store.reviews.isEmpty() ? null : store.reviews.toJS()

export const selectUsersMap = store => store.users

export const selectUserList = createSelector(selectUsersMap, usersMap =>
  Object.values(usersMap)
)

export const selectId = (_, ownProps) => ownProps.id

export const selectDishes = createSelector(selectDishesMap, dishesMap =>
  Object.values(dishesMap)
)

export const selectOrderedDishes = createSelector(
  selectRestaurants,
  selectCart,
  selectDishesMap,
  (restaurants, cart, dishes) =>
    restaurants.reduce(
      (result, restaurant) => {
        restaurant.menu.forEach(dishId => {
          const amount = cart[dishId]
          const dish = dishes[dishId]
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
)

export const selectUser = createSelector(
  selectUsersMap,
  selectId,
  (users, id) => {
    return users[id]
  }
)

export const selectReviews = createSelector(
  selectReviewsMap,
  selectRestaurants,
  selectId,
  (reviews, restaurants, id) => {
    if (reviews) {
      const restaurant = restaurants.find(item => item.id === id)
      if (restaurant) {
        return restaurant.reviews.reduce((acc, reviewId) => {
          const review = reviews[reviewId]
          if (review) {
            const result = [...acc]
            result.push(review)
            return result
          }
          return acc
        }, [])
      }
    }
    return []
  }
)

export const selectAverageRating = createSelector(selectReviews, reviews => {
  const rawRating =
    reviews.reduce((acc, {rating}) => {
      return acc + rating
    }, 0) / reviews.length
  return Math.floor(rawRating * 2) / 2
})
