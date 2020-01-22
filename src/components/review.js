import React from 'react'
import {Rate} from 'antd'

function Review(props) {
  return (
    <>
      <div>{props.review.user}</div>
      <div>{props.review.text}</div>
      <Rate disabled defaultValue={props.review.rating} />
    </>
  )
}

export default Review
