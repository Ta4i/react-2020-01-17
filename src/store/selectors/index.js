import {createSelector} from 'reselect'

export const selectCart = state => state.cart

export const selectId = (_, ownProps) => ownProps.id

// dishes
export const selectDishesMap = store => store.dishes

export const selectDishesList = createSelector(selectDishesMap, dishesMap =>
  Object.values(dishesMap)
)
export const selectDishesLoaded = createSelector(
  selectDishesList,
  dishesList => dishesList.length > 0
)

// reviews
export const selectReviewsMap = store => store.reviews

export const selectReviewsList = createSelector(selectReviewsMap, reviewsMap =>
  Object.values(reviewsMap)
)

export const selectReviewsLoaded = createSelector(
  selectReviewsList,
  reviewsList => reviewsList.length > 0
)

// users
export const selectUsersMap = store => store.users

export const selectUsersList = createSelector(selectUsersMap, usersMap =>
  Object.values(usersMap)
)

export const selectUsersLoaded = createSelector(
  selectUsersList,
  usersList => usersList.length > 0
)

export const selectUser = createSelector(
  selectUsersMap,
  selectId,
  (users, id) => {
    return users[id]
  }
)

// restaurants
export const selectRestaurants = state => state.restaurants

export const selectRestaurantsLoaded = createSelector(
  selectRestaurants,
  restaurants => restaurants.length > 0
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

export const selectReviewsByRestaurant = createSelector(
  selectReviewsLoaded,
  selectRestaurantsLoaded,
  selectReviewsMap,
  selectRestaurants,
  selectId,
  (reviewsLoaded, restaurantsLoaded, reviewsMap, restaurants, id) => {
    if (!reviewsLoaded || !restaurantsLoaded) {
      return []
    }
    const restaurant = restaurants.find(item => item.id === id)
    return restaurant
      ? restaurant.reviews.map(reviewId => reviewsMap[reviewId])
      : []
  }
)

export const selectAverageRating = createSelector(
  selectReviewsByRestaurant,
  reviews => {
    const rawRating =
      reviews.reduce((acc, {rating}) => {
        return acc + rating
      }, 0) / reviews.length
    return Math.floor(rawRating * 2) / 2
  }
)
