import React from 'react'
import PropTypes from 'prop-types'
import {Row, Col, Typography, Rate, Card} from 'antd'
import styles from './review.module.css'

const Review = ({review}) => {
  const {user, text, rating} = review

  if (!user || !text || (!rating && rating !== 0)) {
    return null
  }

  return (
    <Card className={styles.review} data-automation-id="REVIEW">
      <Row type="flex" align="middle">
        <Col xs={24} md={18} align="left">
          <Typography.Title className={styles.name} level={4}>
            {user}
          </Typography.Title>
          <Typography.Text className={styles.comment}>{text}</Typography.Text>
        </Col>
        <Col xs={8} md={6} align="right" className={styles.rateColumn}>
          <Rate disabled value={rating} />
        </Col>
      </Row>
    </Card>
  )
}

Review.propTypes = {
  review: PropTypes.object.isRequired,
}

export default Review
