import {normalizedRestaurants} from '../../fixtures'
import {updateRestaurants, addUser, publishReview} from '../action-creators'
import {PUBLISH_REVIEW} from '../common'

const generateId = () =>
  Math.random()
    .toString(36)
    .substr(2, 9)

const getUpdatedData = ({restaurantId, user, comment, rate}) => {
  const userId = generateId()
  const reviewId = generateId()

  const newUser = {
    [userId]: {
      id: userId,
      name: user,
    },
  }

  const newReview = {
    [reviewId]: {
      id: reviewId,
      userId,
      text: comment,
      rating: rate,
    },
  }

  const restaurantsUpdated = normalizedRestaurants.map(restaurant => {
    if (restaurant.id === restaurantId) {
      restaurant.reviews.push(reviewId)
    }
    return restaurant
  })

  return {
    newUser,
    newReview,
    restaurantsUpdated,
  }
}

export const addNewReview = store => next => action => {
  next(action)

  if (action.type === PUBLISH_REVIEW) {
    const reviewInfo = action.payload
    const {newUser, newReview, restaurantsUpdated} = getUpdatedData(reviewInfo)

    next(updateRestaurants(restaurantsUpdated))
    next(addUser(newUser))
    next(publishReview(newReview))
  }

  console.log('after', store.getState())
}
