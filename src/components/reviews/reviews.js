import React from 'react'
import PropTypes from 'prop-types'
import {Col, Row} from 'antd'
import Review from './review'

const Reviews = ({reviews}) => {
  if (!reviews || !reviews.length) {
    return null
  }

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
  reviews: PropTypes.array.isRequired,
}

Reviews.defaultProps = {
  reviews: [],
}

export default Reviews