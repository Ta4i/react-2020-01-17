import React, {useEffect, useState} from 'react'
import {Rate} from 'antd'

const Reviews = props => {
  const [averageRating, setAverageRating] = useState(0)

  useEffect(() => {
    let sum = 0
    for (let i = 0; i < props.reviews.length; i++) {
      sum += props.reviews[i].rating
    }
    setAverageRating(Math.ceil(sum / props.reviews.length))
  }, [props])

  return (
    <div>
      <div>
        Средний рейтинг <Rate disabled value={averageRating} />
      </div>
      {props.reviews.map(review => (
        <div key={review.id}>
          <div>Имя: {review.user}</div>
          <div>Отзыв: {review.text}</div>
        </div>
      ))}
    </div>
  )
}

export default Reviews
