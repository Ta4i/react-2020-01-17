import React from 'react'
const Review = props => {
  return (
    <div>
      <h3>{props.review.user}</h3>
      <p>{props.review.text}</p>
      <p>{props.review.rating}</p>
    </div>
  )
}
export default Review
