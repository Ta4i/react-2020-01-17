import React from 'react'
import Review from '../review/review'
import './reviews.css'

const Reviews = props => {
  return (
    <div className={'reviews-wrapper'}>
      <div className="reviews">
        <h2>Reviews</h2>
        {props.reviews.map(review => (
          <Review key={review.id} review={review} />
        ))}
      </div>
    </div>
  )
}
export default Reviews
