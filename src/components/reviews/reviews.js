import React from 'react'
import Review from './review'
import {Col, Row} from 'antd'

import PropTypes from 'prop-types';

function Reviews({reviews}) {
  return (
    <Row type="flex" justify="center" gutter={{xs: 8, sm: 16, md: 24}}>
      <Col xs={24} md={16}>
        {reviews.map(review => (
          <Review review={review} key={review.id} />
        ))}
      </Col>
    </Row>
  )
}

Reviews.propTypes = {
  reviews: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    user: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired
  }).isRequired).isRequired
}

export default Reviews
