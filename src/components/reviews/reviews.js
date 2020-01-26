import React from 'react'
import Review from './review'
import {Col, Row} from 'antd'
import PropTypes from 'prop-types'

function Reviews({reviews}) {
  Reviews.propTypes = {
    reviews: PropTypes.array.isRequired,
  }

  Reviews.defaultProps = {
    reviews: [],
  }

  if (!reviews.length) return null

  return (
    <Row type="flex" justify="center" gutter={{xs: 8, sm: 16, md: 24}}>
      <Col xs={24} md={16} data-automation-id="REVIEWS_CONTAINER">
        {reviews.map(review => (
          <Review review={review} key={review.id} />
        ))}
      </Col>
    </Row>
  )
}

export default Reviews
