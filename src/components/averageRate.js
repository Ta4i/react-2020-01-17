import React from 'react'
import {Rate} from 'antd'

const AverageRate = props => {
  const reviews = props.reviews
  const ratings = reviews.map(review => review.rating)
  const averageRating = +(
    ratings.reduce((sum, current) => sum + current, 0) / ratings.length
  ).toFixed(1)

  return (
    <div>
      <Rate disabled allowHalf defaultValue={0} value={averageRating} />
    </div>
  )
}
export default AverageRate
