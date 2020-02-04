import React from 'react'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'
import {Row, Col, Typography, Rate, Card} from 'antd'
import styles from './review.module.css'
import {selectReview, selectUser} from '../../../store/selectors'

const Review = ({id, review, user}) => (
  <Card className={styles.review}>
    <Row type="flex" align="middle">
      <Col xs={24} md={18} align="left">
        <Typography.Title
          data-automation-id="REVIEW_USER"
          className={styles.name}
          level={4}
        >
          {user.name}
        </Typography.Title>
        <Typography.Text
          data-automation-id="REVIEW_TEXT"
          className={styles.comment}
        >
          {review.text}
        </Typography.Text>
      </Col>
      <Col xs={8} md={6} align="right" className={styles.rateColumn}>
        <Rate disabled value={review.rating} />
      </Col>
    </Row>
  </Card>
)

export const ReviewProps = {
  user: PropTypes.shape({
    id: PropTypes.string,
    name: PropTypes.string,
  }),
  review: PropTypes.shape({
    id: PropTypes.string,
    text: PropTypes.string,
    userId: PropTypes.string,
    rating: PropTypes.number,
  }),
  id: PropTypes.string,
}

Review.propTypes = ReviewProps

const mapStateToProps = (state, ownProps) => {
  return {
    review: selectReview(state, ownProps),
    user: selectUser(state, ownProps),
  }
}

export default connect(mapStateToProps)(Review)
