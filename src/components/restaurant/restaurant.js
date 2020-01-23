import React from 'react'
import Menu from '../menu'
import Reviews from '../reviews'
import {Col} from 'antd'
import './restaurant.css'

const Restaurant = ({activeRestaurant}) => {
  const {reviews} = activeRestaurant
  const averageRatingObj = reviews.reduce(
    (acc, currentReview) => {
      const {count, sum} = acc
      const {rating} = currentReview
      const newAcc = {count: count + 1, sum: sum + rating}
      return newAcc
    },
    {count: 0, sum: 0}
  )
  const {count, sum} = averageRatingObj
  const averageRating = sum / count

  return (
    <React.Fragment>
      <Col className="myContent" span={18}>
        <Menu {...activeRestaurant} />
      </Col>
      <Col className="mySlider" span={6}>
        <Reviews reviews={reviews} averageRating={averageRating} />
      </Col>
    </React.Fragment>
  )
}
export default Restaurant
