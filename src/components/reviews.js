import React from 'react'
import Review from './review'
import {Row} from 'antd'

const Reviews = ({reviews}) => {
  return (
    <Row gutter={16}>
      {reviews.map(review => (
        <Review key={review.id} {...review}></Review>
      ))}
    </Row>
  )
}

export default Reviews
