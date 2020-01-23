import React from 'react'

function Review(props) {
  return (
    <div>
      <h2 style={{marginLeft: 20, marginTop: 20, marginBottom: 15}}>Review</h2>
      {props.restaurant.reviews.map(review => (

          <p key={review.id} style={{marginLeft: 20}}>
            {review.text} ({review.user}) {review.rating}
          </p>

      ))}
    </div>
  )
}

export default Review
