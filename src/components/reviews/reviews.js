import React from 'react'
import PropTypes from 'prop-types'
import Review from './review'
import {Col, Row} from 'antd'
import ReviewForm from '../review-form'

function Reviews({reviews = [], restaurantId}) {
  return (
    <Row type="flex" justify="center" gutter={{xs: 8, sm: 16, md: 24}}>
      <Col xs={24} md={16}>
        {reviews.map(reviewId => (
          <Review id={reviewId} key={reviewId} />
        ))}
        <ReviewForm restaurantId={restaurantId} />
      </Col>
    </Row>
  )
}

Reviews.propTypes = {
  reviews: PropTypes.arrayOf(PropTypes.string).isRequired,
  restaurantId: PropTypes.string.isRequired,
}

Reviews.defaultProps = {
  reviews: [],
}

export default Reviews
