import React from 'react'
import {Rate} from 'antd'
import './averageRate.css'

const AverageRate = props => {
  const reviews = props.restaurant.reviews
  const ratings = reviews.map(review => review.rating)
  const averageRating = +(
    ratings.reduce((sum, current) => sum + current, 0) / ratings.length
  ).toFixed(1)

  return (
    <div className="rating">
      <h2>Rating of {props.restaurant.name}</h2>
      <Rate disabled allowHalf defaultValue={0} value={averageRating} />
    </div>
  )
}
export default AverageRate
