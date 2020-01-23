import React from 'react'
import {Rate} from 'antd'

function Review(props) {
  return (
    <div>
      <p>{props.review.user}</p>
      <p>{props.review.text}</p>
      <p>{props.review.rating}</p>
      <Rate disabled defaultValue={props.review.rating} />
    </div>
  )
}

export default Review
