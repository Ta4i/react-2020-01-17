import React from 'react'
import {Rate} from 'antd'

function Reviews(props) {
  return (
    <div>
      {props.restaurant.reviews.map(review => (
        <div key={review.id}>
          {review.user} говорит: "{review.text}"{' '}
          <Rate disabled defaultValue={review.rating} />
        </div>
      ))}
    </div>
  )
}

export default Reviews
