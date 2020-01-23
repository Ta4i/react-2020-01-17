import React from 'react'
import Review from './review/review'
import {Row, Col, Rate} from 'antd'

const Reviews = ({reviews, averageRating}) => {
  const reviewsView = reviews.map(review => (
    <Review className="restaurant_review" key={review.id} {...review}></Review>
  ))

  return (
    <React.Fragment>
      <Row>
        <Col span={24}>
          <h2>Отзывы о ресторане:</h2>
          <span>{averageRating} / 5</span>
          <Rate
            className="review-card"
            disabled
            allowHalf
            defaultValue={averageRating}
          />
        </Col>
        <Col span={24}>{reviewsView}</Col>
      </Row>
    </React.Fragment>
  )
}

export default Reviews
