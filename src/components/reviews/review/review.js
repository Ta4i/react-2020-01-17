import React from 'react'
import {Row, Col, Typography, Rate, Card} from 'antd'
import styles from './review.module.css'

const Review = ({review}) => (
  <Card className={styles.review}>
    <Row type="flex" align="middle">
      <Col xs={24} md={18} align="left">
        <Typography.Title
          className={styles.name}
          level={4}
          data-automation-id="USER"
        >
          {review.user}
        </Typography.Title>
        <Typography.Text className={styles.comment} data-automation-id="TEXT">
          {review.text}
        </Typography.Text>
      </Col>
      <Col xs={8} md={6} align="right" className={styles.rateColumn}>
        <Rate disabled value={review.rating} data-automation-id="RATING" />
      </Col>
    </Row>
  </Card>
)
export default Review
