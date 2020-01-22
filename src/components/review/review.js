import React from 'react'
import './review.css'

const Review = props => {
  return (
    <div className="review">
      <div>
        <h2>Name of visitor: {props.review.user}</h2>
        <p>Visitors eview: {props.review.text}</p>
        <p>Visitors rating: {props.review.rating}</p>
      </div>
    </div>
  )
}
export default Review
