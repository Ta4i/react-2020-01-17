import React from 'react'
import {Comment} from 'antd'

const Review = props => {
  return (
    <div className="Review">
      <Comment
        author={props.review.user}
        content={props.review.text}
        datetime={`(Rating: ${props.review.rating})`}
      />
    </div>
  )
}

export default Review
