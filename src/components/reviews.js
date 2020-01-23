import React from 'react'
import Review from './review'

function Reviews(props) {
  return (
    <>
      {props.reviews.map(review => (
        <Review key={review.id} review={review} />
      ))}
    </>
  )
}

export default Reviews
