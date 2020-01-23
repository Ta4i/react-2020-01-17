import React from 'react'
import Review from '../review/review'

const Reviews = props => {
  return (
    <div className="Reviews">
      <h2>Reviews</h2>
      {props.restaurant.reviews.map(review => (
        <Review key={review.id} review={review} />
      ))}
    </div>
  )
}

export default Reviews
