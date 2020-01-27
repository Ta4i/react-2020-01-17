import React from 'react'
import Review from './review'
import {Col, Row} from 'antd'
import PropTypes from 'prop-types'
import {restaurants} from '../../fixtures'

function Reviews({reviews}) {
  return (
    <Row type="flex" justify="center" gutter={{xs: 8, sm: 16, md: 24}}>
      <Col xs={24} md={16} data-automation-id="REVIEWS">
        {reviews.map(review => (
          <Review review={review} key={review.id} />
        ))}
      </Col>
    </Row>
  )
}
Reviews.propTypes = {
  reviews: PropTypes.arrayOf(PropTypes.object), //Ожидаем получить  массив объектов
}
export default Reviews
