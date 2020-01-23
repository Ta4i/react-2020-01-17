import React from 'react'
import Menu from './menu'
import Reviews from './reviews'
import {Rate} from 'antd'

function Restaurant(props) {
  const ratingsArray = props.restaurant.reviews.map(review => review.rating)
  const averageRating = +(
    ratingsArray.reduce((a, b) => a + b, 0) / ratingsArray.length
  ).toFixed(1)

  return (
    <div className="restaurant">
      <div className="restaurant__header">
        <h1 className="restaurant__title">{props.restaurant.name}</h1>
        <Rate
          style={{marginRight: '8px'}}
          className="restaurant__rating"
          allowHalf
          disabled
          value={averageRating}
        />
      </div>
      <Menu className="restaurant__menu" restaurant={props.restaurant} />
      <Reviews className="restaurant__reviews" restaurant={props.restaurant} />
    </div>
  )
}

export default Restaurant
