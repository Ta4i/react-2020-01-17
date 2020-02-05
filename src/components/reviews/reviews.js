import React from 'react'
import PropTypes from 'prop-types'
import Review, {ReviewProps} from './review'
import {Col, Row} from 'antd'
import ReviewForm from '../review-form'
import {selectReviews} from '../../store/selectors'
import {logging} from '../../store/middlewares/logging'

function Reviews({reviews = [], currentRest}) {
  return (
    <Row type="flex" justify="center" gutter={{xs: 8, sm: 16, md: 24}}>
      <Col xs={24} md={16}>
        {reviews.map(review => (
          <Review review={review} key={review.id} />
        ))}
        <ReviewForm id={''} currentRest={currentRest} />
      </Col>
    </Row>
  )
}

Reviews.propTypes = {
  reviews: PropTypes.arrayOf(PropTypes.shape(ReviewProps)).isRequired,
}

export default Reviews
