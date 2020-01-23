import React from 'react'
import Menu from '../menu/menu'
import Reviews from '../reviews/reviews'
import {Rate} from 'antd'
import './restaurant.css'

const Restaurant = props => {
  const avgRating =
    props.restaurant.reviews.reduce(
      (previous, current) => previous + current.rating,
      0
    ) / props.restaurant.reviews.length
  const roundedRating = Math.round(avgRating * 2) / 2

  return (
    <div className="Restaurant">
      <div className="rating">
        <Rate disabled allowHalf value={roundedRating} />
        <p>Total: {props.restaurant.reviews.length} rates</p>
      </div>
      <Menu restaurant={props.restaurant} />
      <Reviews restaurant={props.restaurant} />
    </div>
  )
}

export default Restaurant
