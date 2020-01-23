import React from 'react'

function Reviews(props) {
  return (
    <div>
      <h4>Reviews</h4>
      <ul>
        {props.reviews.map(review => (
          <li key={review.id}>
            <p>{review.user}</p>
            <p>{review.text}</p>
            <p>{review.rating}</p>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Reviews
